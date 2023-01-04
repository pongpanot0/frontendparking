import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Shoptranfers from "./Shopgroup/Shoptranfers";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Shoptree from "./shoptree/Shoptree";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Shopgroup = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getdata, setgetdata] = React.useState(false);
  return (
    <div>


    <Box sx={{ flexGrow: 1 ,width:'100%'}}>
      <Paper elevation={3} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Shoptranfers onGetdata={setgetdata} oncloce={handleClose} />
        </Box>
      </Modal>{" "}
      <Button fullWidth variant="contained" onClick={handleOpen}>เพิ่มกลุ่มส่วนลด</Button>
      <h4>กลุ่มส่วนลด</h4>
      <Shoptree setgetdata={getdata} />
    </Box>
    </div>
  );
};

export default Shopgroup;
