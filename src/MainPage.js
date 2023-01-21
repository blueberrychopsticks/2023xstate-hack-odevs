import { Typography, Button, Stack } from "@mui/material";

export const MainPage = (issues, selectedRepo) => {
  console.log(issues);
  return (
    <>
      {/* <Typography variant="h4">Issues for {selectedRepo}</Typography> */}
      <Typography variant="h4">Issues for SELECTEDREPO</Typography>
      {/* 
      {issues?.issues.map((issue, index) => {
        return (
          <Stack>
            <Typography variant="h6">TITLE</Typography>
            <Typography variant="body1">TAG</Typography>
            <Button onClick={() => console.log("Research for: " + issue.title)}>
              Research
            </Button>
            <Button onClick={() => console.log("Error for: " + issue.title)}>
              Error
            </Button>
            <Button onClick={() => console.log("Error for: " + issue.title)}>
              Implementation
            </Button>
          </Stack>
        );
      })} */}
    </>
  );
};
