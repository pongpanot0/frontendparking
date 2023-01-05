import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Shopinsertfrm from "./Inserfrm/Shopinsertfrm";
import { getShop } from "../../../../api/shop";
import jwt_decode from "jwt-decode";
import Paginations from "../../../../Helpers/pagination";
import DeletePopup from "../../../../Helpers/DeletePopup";
import Shopedtfrm from "./Inserfrm/Shopedtfrm";
import CardMedia from "@mui/material/CardMedia";
import ShopUser from "./ShopDetail/ShopUser";
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
const ShopCrad = () => {
  const [getshop, setGetshop] = React.useState([]);
  const [pageNumbers, setPageNumber] = React.useState(0);
  const usersPerPage = 12;
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const DeleteData = (id, type) => {
    setType(type);
    setId(id);
    setdisplayConfirmationModal(true);
  };
  const onUpdate = (id) => {
    setId(id);
    setOpen2(true);
  };
  const onView = (id) => {
    setId(id);
    setOpen3(true);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    getShop(id.company_id)
      .then((res) => {
        setGetshop(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [displayConfirmationModal, setdisplayConfirmationModal] =
    React.useState(false);
  const handleClose3 = () => {
    setdisplayConfirmationModal(false);
    setOpen3(false);
  };
  const handleClose2 = () => {
    setdisplayConfirmationModal(false);
    setOpen2(false);
  };
  const ShowNull = () => {
    if (getshop.length <= 0) {
      return <h1>ไม่มีร้านค้า</h1>;
    }
  };
  const pagesVisited = pageNumbers * usersPerPage;
  const displayUsers = getshop
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((row) => {
      return (
        <>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5f76d7cb690e57c164388d32_Artboard%208.png"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {row.shopname}
                </Typography>
                <Typography variant="body2">{row.shopdetail}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={(e) => onView(row._id)} size="small">
                  ดูรายละเอียด
                </Button>
                <Button onClick={(e) => onUpdate(row._id)} size="small">
                  ตั้งค่า
                </Button>
                <Button
                  onClick={(e) => DeleteData(row._id, "shopcard")}
                  size="small"
                >
                  ลบ
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </>
      );
    });

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const chooseMessage = () => {
    getData();
  };
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Shopinsertfrm
              chooseMessage={chooseMessage}
              onClose={handleClose}
              shopid={id}
            />
          </Box>
        </Modal>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Shopedtfrm
              chooseMessage={chooseMessage}
              onClose={handleClose}
              shopid={id}
            />
          </Box>
        </Modal>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ShopUser
              chooseMessage={chooseMessage}
              onClose={handleClose}
              shopid={id}
            />
          </Box>
        </Modal>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button onClick={handleOpen}>เพิ่ม Data </Button>
        </Grid>
        <ShowNull />
        {displayUsers}
        <Grid item xs={12}>
          <Paginations
            getshoplength={getshop.length}
            usersPerPage={usersPerPage}
            chage={changePage}
          />
        </Grid>
        <DeletePopup
          showModal={displayConfirmationModal}
          onClose={handleClose2}
          type={type}
          id={id}
          chooseMessage={chooseMessage}
        />
      </Grid>
    </>
  );
};

export default ShopCrad;
