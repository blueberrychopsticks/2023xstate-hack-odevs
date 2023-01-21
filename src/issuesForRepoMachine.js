import { assign, createMachine } from "xstate";
import {
  assignLabelToIssueAndRemoveOurExistingLabels,
  createLabelsThatDontAlreadyExist,
  fetchAllIssuesForRepo,
  fetchRepos,
} from "./githubApi";
import { useMachine } from "@xstate/react";
import { Octokit } from "octokit";

export const labelPrefix = "label:";
export const implementKey = labelPrefix + "implement";
export const bugKey = labelPrefix + "bug";
export const researchKey = labelPrefix + "research";
export const codeReviewKey = labelPrefix + "code-review";

const issuesForRepoMachine = createMachine({
  id: " Issues for Repo Machine",
  initial: "loadingAllRepos",
  predictableActionArguments: true,
  context: {
    labels: [],
    octokit: null,
    repos: null,
    issues: null,
    selectedRepo: null,
    selectedIssue: null,
  },
  states: {
    /***/
    loadingAllRepos: {
      invoke: {
        id: "loadAllrepos",
        src: (context, event) => fetchRepos(context),
        onDone: {
          target: "waitingToChooseRepo",
          actions: assign({
            repos: (_, event) => event.data,
          }),
        },
        onError: "rejected",
      },
    },

    waitingToChooseRepo: {
      on: {
        repoSelected: {
          target: "loadingAllIssuesForRepo",
          actions: [
            assign({
              selectedRepo: (_, event) => {
                console.log({ event });
                return event.data;
              },
            }),
            async (context, event) => {
              const labels = await createLabelsThatDontAlreadyExist({
                labels: context.labels,
                owner: event.data.owner,
                repo: event.data.name,
              });
              console.log("created labels", { labels });
            },
          ],
        },
      },
    },

    loadingAllIssuesForRepo: {
      invoke: {
        id: "loadingAllIssuesForRepo",
        src: (context, event) => fetchAllIssuesForRepo(context),
        onDone: {
          target: "waitingToChooseIssue",
          actions: assign({
            issues: (_, event) => event.data,
          }),
        },
        onError: "rejected",
      },
    },

    waitingToChooseIssue: {
      entry: assign({
        selectedIssue: null,
      }),
      on: {
        issueSelected: {
          target: "displayingIssueModal",
          actions: [
            assign({
              selectedIssue: (_, event) => event.data,
            }),
            async (context, event) => {
              await assignLabelToIssueAndRemoveOurExistingLabels(
                context,
                event.data.condition
              );
            },
          ],
        },
      },
    },

    displayingIssueModal: {
      on: {
        end: {
          actions: assign({
            selectedIssue: (context) => ({
              ...context.selectedIssue,
              condition: implementKey,
            }),
          }),
        },

        log: {
          actions: (context, event) => {
            /*UNTESTED*/ context.octokit.rest.issues.createComment({
              owner: context.selectedRepo.owner,
              repo: context.selectedRepo.name,
              issue_number: context.selectedIssue.number,
              body: event.data,
            });
          },
        },

        changeCondition: {
          actions: assign({
            selectedIssue: (context, event) => ({
              ...context.selectedIssue,
              condition: event.data.condition,
            }),
          }),
        },

        submitToCodeReview: {
          target: "waitingToChooseIssue",
          actions: async (context, event) => {
            await assignLabelToIssueAndRemoveOurExistingLabels(
              context,
              event.data.condition
            );
          },
        },

        closeIssueModal: {
          target: "waitingToChooseIssue",
          actions: assign({
            selectedIssue: null,
          }),
        },
      },
    },

    waitingForInput: {
      type: "final",
    },

    [implementKey]: {},
    [codeReviewKey]: {},
    [bugKey]: {},
    [researchKey]: {},

    rejected: {
      on: {
        FETCH: "idle",
      },
    },

    idle: {},
  },
});

export const useIssuesForRepo = (githubToken) => {
  const octokit = new Octokit({
    auth: githubToken,
  });
  const labelsFromMachine = Object.keys(issuesForRepoMachine.states).filter(
    (key) => key.startsWith(labelPrefix)
  );
  const [state, send] = useMachine(issuesForRepoMachine, {
    devTools: true,
    context: {
      octokit,
      labels: labelsFromMachine,
    },
  });

  const isIssueModalDisplayed = state.matches("displayingIssueModal");

  const { repos, selectedRepo, issues, selectedIssue } = state.context;

  const selectIssue = (issue, issueCondition) => {
    send({
      type: "issueSelected",
      data: { ...issue, condition: issueCondition },
    });
  };

  const selectRepo = (repo) => {
    const searched = repos.find((r) => r.name === repo);

    send({
      type: "repoSelected",
      data: {
        name: repo,
        owner: searched.owner,
      },
    });
  };

  const closeIssueModal = () => {
    send({ type: "closeIssueModal" });
  };

  const submitComment = (comment) => {
    send({ type: "log", data: comment });
  };

  return {
    labelsFromMachine,
    state: {
      repos,
      selectedRepo,
      issues,
      selectedIssue,
      isIssueModalDisplayed,
    },
    actions: {
      selectRepo,
      selectIssue,
      closeIssueModal,
      submitComment,
    },
  };
};
