import { Typography, Button, Stack } from "@mui/material";

export const MainPage = ({ issues, selectedRepo }) => {
  console.log({ issues, selectedRepo });
  return (
    <>
      <Typography variant="h4">Issues for {selectedRepo.name}</Typography>
      {issues?.map((issue) => {
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
      })}
    </>
  );
};
