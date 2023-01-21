import { Octokit } from "octokit";
import { GITHUB_TOKEN } from "./HIDDEN/tokens";

export const fetchRepos = async (context) => {
  const { octokit } = context;

  const repos = await octokit.rest.repos.listForAuthenticatedUser();
  return repos.data.map((repo) => ({
    name: repo.name,
    owner: repo.owner.login,
  }));
};

export const fetchAllIssuesForRepo = async (context) => {
  const { octokit } = context;

  const params = {
    repo: context.selectedRepo.name,
    owner: context.selectedRepo.owner,
  };
  console.log({ params });

  const issues = await octokit.rest.issues.listForRepo(params);
  return issues.data.map((issue) => {
    return {
      title: issue.title,
      number: issue.number,
      description: issue.body,
      labels: issue.labels.map((label) => label.name),
    };
  });
};

export const assignLabelToIssueAndRemoveOurExistingLabels = async (
  context,
  labelToAdd
) => {
  const { octokit, labels: allLabels, selectedIssue: issue } = context;
  console.log({ allLabels, issue });

  const params = {
    repo: context.selectedRepo.name,
    owner: context.selectedRepo.owner,
    issue_number: issue.number,
  };

  const addLabelParams = {
    ...params,
    labels: [labelToAdd],
  };

  const oldLabels = await octokit.rest.issues.listLabelsOnIssue(params);
  const oldLabelsToRemove = oldLabels.data.filter((label) =>
    allLabels.includes(label.name)
  );

  await octokit.rest.issues.addLabels(addLabelParams);

  if (oldLabelsToRemove.length > 0) {
    await Promise.all(
      oldLabelsToRemove.map(async (label) => {
        await octokit.rest.issues.removeLabel({
          ...params,
          name: label,
        });
      })
    );
  }
};

export const createLabelsThatDontAlreadyExist = async ({
  labels,
  owner,
  repo,
}) => {
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
