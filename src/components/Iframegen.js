import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

function Iframgen() {
  const link = "google.com";

  const copy = async () => {
    await navigator.clipboard.writeText(
      `<iframe src=${link} height="500" width="500"/>`
    );
    alert("Code copied");
  };

  return (
    <Container>
      <Card variant="outlined" style={{width: "500px" }} >
        <CardContent>
          <p style={{ color: "blue" }}>
            Copy This Code And Paste It In A Webpage Or Sway.
          </p>
          <TextField
            style={{ width: "100%" }}
            value={`<iframe src=${link} height="500" width="500"/>`}
          ></TextField>
          <CardActions style={{ float: "right" }}>
            <Button variant="contained" size="small" onClick={copy}>
              Copy
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Iframgen;
