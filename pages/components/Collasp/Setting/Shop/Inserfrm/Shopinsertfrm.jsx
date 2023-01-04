import React from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { createShop, Editshop, getShopdetail } from "../../../../../api/shop";
import jwt_decode from "jwt-decode";
const Shopinsertfrm = ({ chooseMessage, onClose }) => {
  const [shopname, setShopname] = React.useState("");
  const [shopdetail, setShopdetail] = React.useState("");
  const Postdata = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    createShop(shopname, shopdetail, id.user_id, id.company_id)
      .then((res) => {
        chooseMessage();
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="standard-basic"
            label="ชื่อร้านค้า"
            variant="standard"
            onChange={(e) => {
              setShopname(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-multiline-flexible"
            label="รายละเอียดเพิ่มเติม"
            multiline
            fullWidth
            minRows={4}
            maxRows={4}
            onChange={(e) => {
              setShopdetail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button onClick={(e) => Postdata(e)} fullWidth variant="contained">
            เพิ่มข้อมูล
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shopinsertfrm;
