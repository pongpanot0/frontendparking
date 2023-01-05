import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import useEffectOnce from "../../../../../Helpers/use-effect-once";
import { getshopgroup } from "../../../../../api/shop";
import jwt_decode from "jwt-decode";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Shoptranfers from "../Shopgroup/Shoptranfers";

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
const Shoptree = () => {
  useEffectOnce(() => {
    getData();
  });
  const [getshorp, setGetshop] = React.useState([]);
  const getData = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    getshopgroup(id.company_id)
      .then((res) => {
        setGetshop(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /*   if (onGetdata == true) {
    console.log("1234");
    getData();
  } */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const chooseMessage = () => {
    getData();
  };
  const tree = getshorp.map((res) => {
    return (
      <TreeItem nodeId={res._id} label={res.shopgroupname}>
        {res.shop?.map((res) => {
          return <TreeItem nodeId={res._id} label={`ร้าน ${res.shopname}`} />;
        })}
      </TreeItem>
    );
  });
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Shoptranfers chooseMessage={chooseMessage} oncloce={handleClose} />
        </Box>
      </Modal>
      <Button fullWidth variant="contained" onClick={handleOpen}>
        เพิ่มกลุ่มส่วนลด
      </Button>
      <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        sx={{ height: "100%", width: "100%", flexGrow: 1, overflowY: "auto" }}
      >
        {tree}
      </TreeView>
    </div>
  );
};

export default Shoptree;
