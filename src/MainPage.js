import {
  Typography,
  Button,
  Grid,
  ButtonGroup,
  DialogTitle,
  Dialog,
  TextField,
  DialogContent,
} from "@mui/material";
import {
  bugKey,
  codeReviewKey,
  implementKey,
  researchKey,
} from "./issuesForRepoMachine";
import React from "react";
const uiMap = {
  [bugKey]: "🐛 Error",
  [implementKey]: "Implement",
  [researchKey]: "Research",
  [codeReviewKey]: "Code Review",
};

const emojiMap = {
  [bugKey]: "🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛",
  [implementKey]: "📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝",
  [researchKey]: "📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘",
  [codeReviewKey]:
    "🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽🧙🏽",
};

export const MainPage = ({
  issues,
  selectIssue,
  selectedIssue,
  isIssueModalDisplayed,
  closeIssueModal,
  submitComment,
}) => {
  const [text, setText] = React.useState("");
  const _submitComment = () => {
    const preamble = emojiMap[selectedIssue.condition] + "\n\n";
    const fullComment = preamble + text;
    submitComment(fullComment);
    setText("");
  };
  return (
    <>
      <Typography variant="h4">Issues</Typography>
      <Grid container>
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
                  <Button onClick={() => selectIssue(issue, codeReviewKey)}>
                    Code Review
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

          <DialogContent>
            <Typography variant="h6">{selectedIssue?.title}</Typography>

            <TextField
              label="Enter a comment for this issue"
              id="comment-entry"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <Button onClick={_submitComment}>Submit Your Comment</Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
