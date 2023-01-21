import "./App.css";
import { useIssuesForRepo } from "./issuesForRepoMachine";
import { GITHUB_TOKEN } from "./HIDDEN/tokens";
import { Autocomplete, TextField } from "@mui/material";
import { NoIssues } from "./NoIssues";

function App() {
  const {
    allState,
    state: { repos, selectedRepo, issues, selectedIssue },
    actions: { selectRepo, selectIssue },
  } = useIssuesForRepo(GITHUB_TOKEN);

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
          selectIssue(value);
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
      <NoIssues
        repos={repos}
        selectedRepo={selectedRepo}
        issues={issues}
        selectedIssue={selectedIssue}
        selectRepo={selectRepo}
      />
    </div>
  );
}

export default App;
