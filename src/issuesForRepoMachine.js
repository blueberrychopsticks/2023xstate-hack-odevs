import { assign, createMachine } from "xstate";
import { fetchAllIssuesForRepo, fetchRepos } from "./githubApi";
import { useMachine } from "@xstate/react";
import { Octokit } from "octokit";

const issuesForRepoMachine = createMachine({
  id: " Issues for Repo Machine",
  initial: "loadingAllRepos",
  predictableActionArguments: true,
  context: {
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
          actions: assign({
            selectedRepo: (_, event) => {
              console.log({ event });
              return event.data;
            },
          }),
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
  const [state, send] = useMachine(issuesForRepoMachine, {
    context: {
      octokit,
    },
  });

  const { repos, selectedRepo, issues, selectedIssue } = state.context;

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
    state: { repos, selectedRepo, issues, selectedIssue },
    actions: {
      selectRepo,
      selectIssue,
    },
  };
};
