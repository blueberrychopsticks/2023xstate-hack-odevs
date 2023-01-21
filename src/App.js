import "./App.css";
import { useIssuesForRepo } from "./issuesForRepoMachine";
import { GITHUB_TOKEN } from "./HIDDEN/tokens";
import { NoIssues } from "./NoIssues";

function App() {
  const {
    state: {
      repos,
      selectedRepo,
      issues,
      selectedIssue,
      isIssueModalDisplayed,
    },
    actions: { selectRepo, selectIssue, closeIssueModal, submitComment },
  } = useIssuesForRepo(GITHUB_TOKEN);

  return (
    <div className="App">
      <NoIssues
        repos={repos}
        selectedRepo={selectedRepo}
        issues={issues}
        selectedIssue={selectedIssue}
        selectRepo={selectRepo}
        selectIssue={selectIssue}
        isIssueModalDisplayed={isIssueModalDisplayed}
        closeIssueModal={closeIssueModal}
        submitComment={submitComment}
      />
    </div>
  );
}

export default App;
