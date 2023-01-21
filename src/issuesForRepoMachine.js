import { assign, createMachine } from "xstate";
import { fetchAllIssuesForRepo, fetchRepos } from "./githubApi";
import { useMachine } from "@xstate/react";
import { Octokit } from "octokit";
import { GITHUB_TOKEN } from "./HIDDEN/tokens";

export const labelPrefix = "label:";
const implementKey = labelPrefix + "implement";
const bugKey = labelPrefix + "bug";
const researchKey = labelPrefix + "research";
const codeReviewKey = labelPrefix + "code-review";

const createLabelsThatDontAlreadyExist = async ({ labels, owner, repo }) => {
  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });
  const existingLabels = await octokit.rest.issues.listLabelsForRepo({
    owner,
    repo,
  });

  const existingLabelNames = existingLabels.data.map((label) => label.name);

  const labelsThatDontAlreadyExist = labels.filter(
    (label) => !existingLabelNames.includes(label)
  );

  await Promise.all(
    labelsThatDontAlreadyExist.map((label) =>
      octokit.rest.issues.createLabel({
        owner,
        repo,
        name: label,
        color: /* TODO Use pretty colors */ "000000",
      })
    )
  );

  return labelsThatDontAlreadyExist;
};

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
      on: {
        issueSelected: {
          target: "waitingForInput",
          actions: assign({
            selectedIssue: (_, event) => event.data,
          }),
        },
      },
    },

    waitingForInput: {
      type: "final",
    },

    [implementKey]: {
      on: {
        [bugKey]: {
          target: bugKey,
          // side effect to mutate issue!
        },

        [researchKey]: {
          target: researchKey,
          // side effect to mutate issue!
        },

        [codeReviewKey]: {
          target: [codeReviewKey],
          // side effect to mutate issue!
        },

        log: {
          // side effect to mutate issue!
        },
      },
    },

    [codeReviewKey]: {
      // Always go straight to waitingToChooseIssue
      always: {
        target: "waitingToChooseIssue",
      },
    },

    [bugKey]: {
      on: {
        log: {
          // side effect to mutate issue!
        },
        solved: {
          target: "waitingToChooseIssue",
          // side effect to mutate issue!
        },
      },
    },

    [researchKey]: {
      on: {
        log: {
          // side effect to mutate issue!
        },
        done: {
          target: implementKey,
          // side effect to mutate issue!
        },
      },
    },

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
    context: {
      octokit,
      labels: labelsFromMachine,
    },
  });

  const { repos, selectedRepo, issues, selectedIssue } = state.context;
  console.log({ selectedRepo });

  const selectIssue = (issueName) => {
    const issue = issues.find((issue) => issue.title === issueName);
    send({ type: "issueSelected", data: issue });
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

  return {
    allState: state,
    labelsFromMachine,
    state: { repos, selectedRepo, issues, selectedIssue },
    actions: {
      selectRepo,
      selectIssue,
    },
  };
};
