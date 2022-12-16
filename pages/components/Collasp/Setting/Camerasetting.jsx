import React from "react";
import { Grid, Card, Text } from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { createkios, getkios } from "../../../api/Kiossetting";
import { createcamera, getcamera } from "../../../api/camerasetting";
import jwt_decode from "jwt-decode";
const Camerasetting = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [camera_ip, setcamera_ip] = React.useState("");
  const [wiegandID, setwiegandID] = React.useState("");
  const [in_out_type, setin_out_type] = React.useState("");
  const [doornum, setdoornum] = React.useState("");
  const [camera_name, setcamera_name] = React.useState("");
  const [camera_port, setcamera_port] = React.useState("");
  const [camera_uuid, setcamera_uuid] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    getdata();
  }, []);

  const columns = [
    {
      field: "_id",
      headerName: "_id",
      width: 500,
    },
    {
      field: "camera_ip",
      headerName: "camera_ip",
      width: 500,
    },
    {
      field: "wiegandID",
      headerName: "wiegandID",
      width: 500,
    },
    {
      field: "in_out_type",
      headerName: "in_out_type",
      width: 500,
    },
    {
      field: "doornum",
      headerName: "doornum",
      width: 500,
    },
    {
      field: "camera_name",
      headerName: "camera_name",
      width: 500,
    },
    {
      field: "camera_port",
      headerName: "camera_port",
      width: 500,
    },




  ];
  const [camera, setCamera] = React.useState([]);
  const postDate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);


    createcamera(
      id.company_id,
      camera_ip,
      wiegandID,
      in_out_type,
      doornum,
      camera_name,
      camera_port,
      
    )
      .then((res) => {
        alert(res.data.data.acknowledged);
        getdata();
      })
      .catch((err) => {
        alert(err);
      });
  };
  const getdata = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    console.log(id.company_id);

    getcamera(id.company_id)
      .then((res) => {
        setCamera(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function CustomToolbar({ setFilterButtonEl }) {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton ref={setFilterButtonEl} />
      </GridToolbarContainer>
    );
  }
  return (
    <Grid.Container gap={2} justify="center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <Grid.Container gap={2} justify="center">
              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="kios_name"
                  variant="outlined"
                  onChange={(e) => {
                    setcamera_ip(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="setcamera_name"
                  variant="outlined"
                  onChange={(e) => {
                    setcamera_name(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="setwiegandID"
                  variant="outlined"
                  onChange={(e) => {
                    setwiegandID(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="setin_out_type"
                  variant="outlined"
                  onChange={(e) => {
                    setin_out_type(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="setdoornum"
                  variant="outlined"
                  onChange={(e) => {
                    setdoornum(e.target.value);
                  }}
                />
              </Grid>

              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="setcamera_port"
                  variant="outlined"
                  onChange={(e) => {
                    setcamera_port(e.target.value);
                  }}
                />
              </Grid>

              <Grid xs={12}>
                <Button
                  variant="contained"
                  onClick={(e) => postDate(e)}
                  fullWidth
                >
                  ตกลง
                </Button>
              </Grid>
            </Grid.Container>
          </Box>
        </div>
      </Modal>
      <Grid xs={6}>
        <Button onClick={handleOpen}>Open modal</Button>
      </Grid>
      <Grid xs={6}></Grid>

      <DataGrid
        rows={camera}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        localeText="th"
        getRowId={(camera) => camera._id}
        autoHeight
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </Grid.Container>
  );
};

export default Camerasetting;
