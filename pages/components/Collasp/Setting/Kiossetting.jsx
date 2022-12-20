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
import jwt_decode from "jwt-decode";
import { createkios, getkios } from "../../../api/Kiossetting";
import { useSession } from "next-auth/react";

const Kiossetting = () => {
  const { data: session } = useSession();
  const token = session.accessToken;
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
  const [kios_macaddress, setkios_macaddress] = React.useState("");
  const [kios_name, setkios_name] = React.useState("");

  const [kios_serailNum, setkios_serailNum] = React.useState("");
  const [kios_ipaddress, setkios_ipaddress] = React.useState("");
  const [kios_port, setkios_port] = React.useState("");
  const [kios_usingfleg, setkios_usingfleg] = React.useState("");
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
      field: "kios_macaddress",
      headerName: "kios_macaddress",
      width: 500,
    },
    {
      field: "company_id",
      headerName: "company_id",
      width: 500,
    },
    {
      field: "kios_ipaddress",
      headerName: "kios_ipaddress",
      width: 500,
    },
    {
      field: "kios_name",
      headerName: "kios_name",
      width: 500,
    },
    {
      field: "kios_serailNum",
      headerName: "kios_serailNum",
      width: 500,
    },
    {
      field: "kios_port",
      headerName: "kios_port",
      width: 500,
    },
    {
      field: "kios_usingfleg",
      headerName: "kios_usingfleg",
      width: 500,
    },
  ];
  const [kios, setKios] = React.useState([]);
  const postDate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);

    createkios(
      id.company_id,
      kios_macaddress,
      kios_name,
      kios_serailNum,
      kios_ipaddress,
      kios_port,
      kios_usingfleg
    )
      .then((res) => {
        alert(res.data.data.acknowledged);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const getdata = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);

    getkios(id.company_id)
      .then((res) => {
        console.log(res.data.data);
        setKios(res.data.data);
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
                  label="setkios_name"
                  variant="outlined"
                  onChange={(e) => {
                    setkios_name(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="setkios_macaddress"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setkios_macaddress(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="setkios_serailNum"
                  variant="outlined"
                  onChange={(e) => {
                    setkios_serailNum(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="setkios_ipaddress"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setkios_ipaddress(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="setkios_port"
                  variant="outlined"
                  onChange={(e) => {
                    setkios_port(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="setkios_usingfleg"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setkios_usingfleg(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <Button onClick={(e) => postDate(e)} fullWidth>
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
        rows={kios}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        localeText="th"
        getRowId={(kios) => kios._id}
        autoHeight
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </Grid.Container>
  );
};

export default Kiossetting;
