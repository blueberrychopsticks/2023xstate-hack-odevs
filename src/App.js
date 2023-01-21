import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { Octokit } from "octokit";
import { GITHUB_TOKEN } from "./HIDDEN/tokens";

function App() {
  useEffect(() => {
    console.log(GITHUB_TOKEN);
    // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
    const octokit = new Octokit({
      auth: GITHUB_TOKEN,
    });

    // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
    async function foo() {
      const issues = await octokit.rest.issues.list();
      // console.log(JSON.stringify(issues, null, 4));

      // Remove all labels from the first issue in the above list
      const issue = issues.data[0];
      const labels = issue.labels.map((label) => label.name);

      const owner = issue.repository.owner.login;
      const repo = issue.repository.name;

      // await octokit.rest.issues.createLabel({
      //   owner,
      //   repo,
      //   name: "foo",
      //   color: "ff0000",
      // });

      // await octokit.rest.issues.removeAllLabels({
      //   issue_number: issue.number,
      //   owner,
      //   repo,
      // });

      const repos = await octokit.rest.repos.listForAuthenticatedUser();
      const repoNames = repos.data.map((repo) => repo.name);
      console.log(repoNames);
    }

    foo();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
