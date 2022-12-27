import React from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { createShop, Editshop, getShopdetail } from "../../../../../api/shop";
import jwt_decode from "jwt-decode";
const Shopedtfrm = ({ chooseMessage, onClose, shopid }) => {
  const [shopname, setShopname] = React.useState("");
  const [shopdetail, setShopdetail] = React.useState("");
  React.useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    getShopdetail(shopid).then((res) => {
        setShopname(res.data.data[0].shopname);
        setShopdetail(res.data.data[0].shopdetail);
    });
  };
  const Postdata = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);

    Editshop(shopid, shopname, shopdetail, id.user_id)
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
            value={shopname}
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
            value={shopdetail}
            minRows={4}
            maxRows={4}
            onChange={(e) => {
              setShopdetail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button onClick={(e) => Postdata(e)} fullWidth variant="contained">
            อัพเดทข้อมูล
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shopedtfrm;
