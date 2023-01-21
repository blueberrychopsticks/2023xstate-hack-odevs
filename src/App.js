import "./App.css";
import { useIssuesForRepo } from "./issuesForRepoMachine";
import { GITHUB_TOKEN } from "./HIDDEN/tokens";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect } from "react";
import { Octokit } from "octokit";

function App() {
  const {
    allState,
    labelsFromMachine,
    state: { repos, selectedRepo, issues, selectedIssue },
    actions: { selectRepo, selectIssue },
  } = useIssuesForRepo(GITHUB_TOKEN);

  useEffect(() => {
    const foo = async () => {
      // await createLabelsThatDontAlreadyExist({
      //   labels: labelsFromMachine,
      //   owner: "joshuajbouw",
      //   repo: "test",
      // });
    };

    labelsFromMachine?.length && foo();
  }, [labelsFromMachine]);

  return (
    <div className="App">
      <h1>{selectedRepo?.name}</h1>
      <h1>{selectedRepo?.owner}</h1>
      <h1>{JSON.stringify(selectedIssue, null, 4)}</h1>
      <h1>{JSON.stringify(issues, null, 4)}</h1>

      <Autocomplete
        onChange={(event, value) => {
          selectRepo(value);
        }}
        disablePortal
        options={repos?.map((repo) => repo.name)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Repo" />}
      />

      <Autocomplete
        onChange={(event, value) => {
          console.log({ value });
          selectIssue(value);
          // selectRepo(value);
        }}
        disablePortal
        options={issues?.map((issue) => issue.title)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Issue" />}
      />

      {issues?.length > 1 && (
        <h1>{JSON.stringify(allState.context, null, 8)}</h1>
      )}
      <h1>{JSON.stringify(allState.value, null, 8)}</h1>
      {/*<h1>{JSON.stringify(state.value, null, 4)}</h1>*/}
      {/*<h1>{JSON.stringify(state.context, null, 4)}</h1>*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;

/**
 *   // useEffect(() => {
 *   //   console.log(GITHUB_TOKEN);
 *   //   // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
 *   //
 *   //   // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
 *   //   async function foo() {
 *   //     // list all repos for the authenticated user
 *   //     setRepos(
 *   //       octokit.rest.repos
 *   //         .listForAuthenticatedUser({
 *   //           visibility: "all",
 *   //         })
 *   //         .then((data) => {
 *   //           return data.map((repo) => {
 *   //             return repo.name;
 *   //           });
 *   //         })
 *   //     );
 *   //
 *   //     const issues = await octokit.rest.issues.list();
 *   //     // console.log(JSON.stringify(issues, null, 4));
 *   //
 *   //     // Remove all labels from the first issue in the above list
 *   //     const issue = issues.data[0];
 *   //     const labels = issue.labels.map((label) => label.name);
 *   //
 *   //     const owner = issue.repository.owner.login;
 *   //     const repo = issue.repository.name;
 *   //
 *   //     // await octokit.rest.issues.createLabel({
 *   //     //   owner,
 *   //     //   repo,
 *   //     //   name: "foo",
 *   //     //   color: "ff0000",
 *   //     // });
 *   //
 *   //     // await octokit.rest.issues.removeAllLabels({
 *   //     //   issue_number: issue.number,
 *   //     //   owner,
 *   //     //   repo,
 *   //     // });
 *   //
 *   //     const repos = await octokit.rest.repos.listForAuthenticatedUser();
 *   //     const repoNames = repos.data.map((repo) => repo.name);
 *   //     console.log(repoNames);
 *   //   }
 *   //
 *   //   foo();
 *   // }, []);
 */
