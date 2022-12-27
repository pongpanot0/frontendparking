import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { deleteShop } from "../api/delete";
import Alert from "@mui/material/Alert";
import Stack from '@mui/material/Stack';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DeletePopup = ({ showModal, onClose, type, id, chooseMessage }) => {
  const Delete = () => {
    if (type === "shopcard") {
      deleteShop(id)
        .then((res) => {
          chooseMessage();
          onClose();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <Modal
        open={showModal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography align="center" variant="h6" gutterBottom>
        ท่านต้องการลบข้อมูลนี้ใช่หรือไม่
      </Typography>
          <ErrorOutlineTwoToneIcon style={{color:'red',width:'100%',height:'250px'}}/>
          <Stack spacing={2} direction="row">
          <Button style={{width:'50%'}} variant="contained" onClick={(e) => Delete(e)}>
            ตกลง
          </Button>
          <Button  style={{width:'50%'}} variant="contained" onClick={(e) => onClose(e)}>
            ยกเลิก
          </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default DeletePopup;
