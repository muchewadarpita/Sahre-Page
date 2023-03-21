/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import React from "react";
import Linkgen from "./Linkgen";
import Qrcodegen from "./Qrcodegen";
import Iframgen from "./Iframegen";
import "../index.css"

import {
  Container,
  Card,
  DialogActions,
  Divider,
  Box,
  CardContent,
  CardActions,
  Button,
  Slide,
  Dialog,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "mui-image";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function Share() {
  const [open, setOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setSelectedComponent("link");
  };

  const handleQrCodeClick = () => {
    setSelectedComponent("qrcode");
  };

  const handleIframeClick = () => {
    setSelectedComponent("iframe");
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Share
      </Button>
      <Dialog
        style={{ marginLeft: "60%", width: "50%" }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ marginRight: "10px" }}>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
              <b>Share</b>
            </Box>
            <Box>
              <DialogActions>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </DialogActions>
            </Box>
          </Box>
        </DialogTitle>
        <Divider />
        <Container style={{ height: "800px" }}>
          <Card
            variant="outlined"
            style={{ width: "500px", marginLeft: "26px" }}
          >
            <CardContent>
              <p>Share and Collect Responses.</p>
              <CardActions>        
                <Image src='./link4.png'alt="Link"  easing="ease-in-out" onClick={handleLinkClick}  style={{width:'30px',height:'30px'}}/>
                <Image src='./qrcode2.png'alt="Qrcode" onClick={handleQrCodeClick} style={{width:'30px',height:'30px'}} />
                <Image src='./iframe4.png'alt="Iframe" onClick={handleIframeClick} style={{width:'40px',height:'40px'}} />
            
              </CardActions>
            </CardContent>
          </Card>
          {selectedComponent === "qrcode" && <Qrcodegen />}
          {selectedComponent === "iframe" && <Iframgen />}
          {selectedComponent === "link" && <Linkgen />}
        </Container>
      </Dialog>
    </>
  );
}
export default Share;
