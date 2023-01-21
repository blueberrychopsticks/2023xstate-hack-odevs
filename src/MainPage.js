import {
  Typography,
  Button,
  Grid,
  ButtonGroup,
  DialogTitle,
  Dialog,
} from "@mui/material";
import { bugKey, implementKey, researchKey } from "./issuesForRepoMachine";
const uiMap = {
  [bugKey]: "🐛 Error",
  [implementKey]: "Implement",
  [researchKey]: "Research",
};

export const MainPage = ({
  issues,
  selectedRepo,
  selectIssue,
  selectedIssue,
  isIssueModalDisplayed,
  closeIssueModal,
}) => {
  return (
    <>
      <Grid container>
        <Typography variant="h4">Issues for {selectedRepo.name}</Typography>
        {issues?.map((issue) => {
          return (
            <>
              <Grid item xs={5}>
                <Typography variant="h6"> - {issue.title}</Typography>
              </Grid>
              <Grid item xs={7}>
                <ButtonGroup size="small">
                  <Button onClick={() => selectIssue(issue, researchKey)}>
                    Research
                  </Button>
                  <Button onClick={() => selectIssue(issue, bugKey)}>
                    Error
                  </Button>
                  <Button onClick={() => selectIssue(issue, implementKey)}>
                    Implementation
                  </Button>
                </ButtonGroup>
              </Grid>
            </>
          );
        })}
      </Grid>
      {isIssueModalDisplayed && (
        <Dialog onClose={closeIssueModal} open={isIssueModalDisplayed} dividers>
          <DialogTitle>
            {selectedIssue?.condition && uiMap[selectedIssue?.condition]}
          </DialogTitle>
        </Dialog>
      )}
    </>
  );
};
