import { useRef, React } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../index.css";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";

function Qrcodegen() {
  const qrRef = useRef();
  const link = "facebook.com";
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={link}
      size={200}
      bgColor={"#fff"}
      level={"H"}
    />
  );

  return (
    <Container>
      <Card variant="outlined" style={{width: "500px",marginLeft:"2px" }}>
        <CardContent>
          <p style={{ color: "blue", marginLeft: "7%" }}>
            Recipients Can Scan The Code On A Phone Or Tablet To Access The
            Form.
          </p>
          <Box
            sx={{
              width: 300,
              height: 230,
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            style={{ marginLeft: "37%" }}
            ref={qrRef}
          >
            {qrcode}
          </Box>

          <div>
            <form onSubmit={downloadQRCode} style={{ marginLeft: "40%" }}>
              <input type="hidden" value={link} disabled />
              <CardActions>
                <Button type="submit" variant="contained" size="small">
                  Download
                </Button>
              </CardActions>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Qrcodegen;
