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
  selectedIssue,
  selectRepo,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [tempRepo, setTempRepo] = useState(null);

  return (
    <>
      <Button
        onClick={() => setOpenDialog(true)}
        endIcon={<AddCircle fontSize="large" />}
      />
      <Dialog open={true} onClose={() => setOpenDialog(false)} dividers>
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
            <MainPage issues={issues} selectedRepo={selectedRepo} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => selectRepo(tempRepo)}>Submit</Button>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
