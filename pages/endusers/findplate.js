import React from "react";
import { Grid, Text } from "@nextui-org/react";
import { Input } from "@mui/material";
import { getParkingLike } from "../api/enduser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
const Findplate = () => {
  const [lcplate, setlcplate] = React.useState("");
  const [getDetail, setgetDetail] = React.useState([]);
  const getdata = (e) => {
    const id = localStorage.getItem("company_id");
    getParkingLike(id, lcplate)
      .then((row) => {
        console.log(row.data.data);
        setgetDetail(row.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const showbill = getDetail.map((row) => {
    console.log(row);
    return (
      <>
        <Card sx={{ minWidth: 275, width: "100%" }}>
          <CardContent>
            <Typography align="center" variant="h5" component="div">
              ทะเบียนรถ {row.lcplate}
            </Typography>
            <br></br>
            <Typography align="center" sx={{ mb: 1.5 }} color="text.secondary">
              จอดตั้งแต่ {row.parking_start}
            </Typography>
            <br></br>
            <Typography align="center" variant="body1">
              ค่าบริการทั้งหมด {row.totalSum}
            </Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth>เข้าสู่หน้าชำระเงิน</Button>
          </CardActions>
        </Card>
      </>
    );
  });

  return (
    <Grid.Container  alignItems='center'  gap={2} justify="center" alignContent="center">
      <Grid xs={4} md={4}></Grid>
      <Grid.Container alignItems='center' justify="center" alignContent="center" xs={4} md={4}>
        <div>
          <Typography align="center" paragraph variant="h5">
            ตรวจสอบค่าจอดรถ
          </Typography>
        </div>
      </Grid.Container>
      <Grid xs={4} md={4}></Grid>
      <Grid xs={4} md={4}></Grid>
      <Grid xs={4} md={4}>
        <Grid.Container gap={0} justify="center">
          <Grid xs={12} md={12}>
            <Input
              fullWidth
              style={{ width: "100%" }}
              onChange={(e) => {
                setlcplate(e.target.value);
              }}
              placeholder="ใส่หมายเลขทะเบียน"
            />
          </Grid>
          <Grid xs={12} md={12} mt={2}>
            <Button fullWidth onClick={(e) => getdata(e)}>
              {" "}
              ค้นหา
            </Button>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={4} md={4}></Grid>
      <Grid xs={4} md={4}></Grid>
      <Grid xs={4} md={4}>
        {showbill}
      </Grid>
      <Grid xs={4} md={4}></Grid>
    </Grid.Container>
  );
};

export default Findplate;
