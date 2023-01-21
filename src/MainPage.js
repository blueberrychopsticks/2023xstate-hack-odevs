import { Typography, Button, Grid, ButtonGroup } from "@mui/material";

export const MainPage = ({ issues, selectedRepo }) => {
  return (
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
                <Button
                  onClick={() => console.log("Research for: " + issue.title)}
                >
                  Research
                </Button>
                <Button
                  onClick={() => console.log("Error for: " + issue.title)}
                >
                  Error
                </Button>
                <Button
                  onClick={() => console.log("Error for: " + issue.title)}
                >
                  Implementation
                </Button>
              </ButtonGroup>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};
