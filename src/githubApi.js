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
