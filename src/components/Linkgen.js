import { React } from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import '../App.css';

function Linkgen() {
  const link = "facebook.com";

  const copy = async () => {
    await navigator.clipboard.writeText(link);
    alert("Link copied");
  };

  return (
    <Container>
      <Card variant="outlined" style={{width: "500px"}}>
        <CardContent>
          <p style={{ color: "blue" }}>Anyone with link can Respond</p>
          <TextField
            value={link}
            disabled={true}
            style={{ width: "100%", marginBottom: "2%", marginTop: "1%" }}
          />

          <FormGroup style={{ float: "left" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Shorten URL"
            />
          </FormGroup>

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

export default Linkgen;
