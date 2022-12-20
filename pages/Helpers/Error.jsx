import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const Error = ({Text}) => {
  return (
    <div>
      <DialogTitle style={{ textAlign: "center" ,color:'red'}} id="draggable-dialog-title">
        เกิดบางอย่างผิดผลาด
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {Text}
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </div>
  );
};

export default Error;
