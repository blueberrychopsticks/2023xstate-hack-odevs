import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { MainPage } from "./MainPage";

export const NoIssues = ({
  repos,
  selectedRepo,
  issues,
  selectRepo,
  selectIssue,
  selectedIssue,
  isIssueModalDisplayed,
  closeIssueModal,
  submitComment,
}) => {
  const [tempRepo, setTempRepo] = useState(null);

  const title = selectedRepo ? selectedRepo.name : "Select a repo";

  return (
    <>
      <Dialog fullWidth maxWidth={"lg"} open={true} dividers>
        <DialogTitle>{title}</DialogTitle>
        {/*<DialogContent sx={{ height: 700, width: 100 }}>*/}
        <DialogContent sx={{ height: 400 }}>
          {!selectedRepo && (
            <Autocomplete
              onChange={(event, value) => {
                setTempRepo(value);
              }}
              disablePortal
              options={repos?.map((repo) => repo.name)}
              fullWidth
              renderInput={(params) => <TextField {...params} label="Repo" />}
            />
          )}
          {selectedRepo && (
            <MainPage
              issues={issues}
              selectedRepo={selectedRepo}
              selectIssue={selectIssue}
              selectedIssue={selectedIssue}
              isIssueModalDisplayed={isIssueModalDisplayed}
              closeIssueModal={closeIssueModal}
              submitComment={submitComment}
            />
          )}
        </DialogContent>
        <DialogActions>
          {!selectedRepo && (
            <Button onClick={() => selectRepo(tempRepo)}>Submit</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
