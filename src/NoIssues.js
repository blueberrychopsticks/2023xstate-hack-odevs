import { AddCircle } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Autocomplete,
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
  isIssueModalDisplayed,
}) => {
  const [tempRepo, setTempRepo] = useState(null);

  return (
    <>
      <Dialog open={true} dividers>
        <DialogTitle>Select A Repo</DialogTitle>
        <DialogContent>
          {!selectedRepo && (
            <Autocomplete
              onChange={(event, value) => {
                setTempRepo(value);
              }}
              disablePortal
              options={repos?.map((repo) => repo.name)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Repo" />}
            />
          )}
          {selectedRepo && (
            <MainPage
              issues={issues}
              selectedRepo={selectedRepo}
              selectIssue={selectIssue}
              isIssueModalDisplayed={isIssueModalDisplayed}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => selectRepo(tempRepo)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
