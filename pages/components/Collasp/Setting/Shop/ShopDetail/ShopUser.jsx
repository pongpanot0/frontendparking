import React from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { Editshop, getShopdetail } from "../../../../../api/shop";
import jwt_decode from "jwt-decode";
const ShopUser = ({ chooseMessage, onClose, shopid }) => {
  const [shopname, setShopname] = React.useState("");
  const [shopdetail, setShopdetail] = React.useState("");
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  React.useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    getShopdetail(shopid).then((res) => {
      console.log(res.data.data[0]);
      setusername(res.data.data[0]?.username);
      setpassword(res.data.data[0]?.password);
      setShopname(res.data.data[0].shopname);
      setShopdetail(res.data.data[0].shopdetail);
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Username"
            variant="standard"
            value={username}
            disabled
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Password"
            variant="standard"
            value={password}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="standard-basic"
            label="ชื่อร้านค้า"
            variant="standard"
            value={shopname}
            disabled
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
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShopUser;
