import React from "react";
import { getSettingwaysPayments } from "../../../api/setting";
import {
  DataGrid,
  GridColumnHeaderFilterIconButton,
  GridFilterForm,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

import { Button, Text, Input, Row, Checkbox, Link } from "@nextui-org/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Settingways from "./Settingways";
import jwt_decode from "jwt-decode";
import { Stack } from "@mui/system";
import Editways from "./Editways";
const SettingwaysTable = () => {
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

  const [paymentsway, setPaymentways] = React.useState([]);
  React.useEffect(() => {
    getdata();
  }, []);
  const [editid, setEditid] = React.useState("");
  const columns = [
    {
      field: "_id",
      headerName: "chanel_payments_id",
      width: 300,
    },
    {
      field: "chanel_payments_name",
      headerName: "chanel_payments_name",
      width: 300,
    },
    {
      field: "chanel_payments_detail",
      headerName: "chanel_payments_detail",
      width: 300,
    },
    {
      field: "chanel_name",
      headerName: "chanel_name",
      valueGetter: (params) => {
        return params.getValue(params.id, "chanel").chanel_name;
      },
      width: 300,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e) => {
          setEditid(params.row._id);
          setOpen2(true);
        };

        return (
          <Button fullwidth onClick={(e) => onClick()} variant="contained">
            Edit
          </Button>
        );
      },
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const getdata = () => {
    const token = localStorage.getItem("token");
      const id = jwt_decode(token);
    console.log(id)
    getSettingwaysPayments(id.company_id)
      .then((res) => {
        console.log(res.data.data)
        setPaymentways(res.data.data);
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
    <div style={{ height: 400, width: "100%" }}>
      <Button auto shadow onClick={handleOpen}>
        Open modal
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Settingways />
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Editways id={editid} />
        </Box>
      </Modal>
      <DataGrid
        rows={paymentsway}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        checkboxSelection
        getRowId={(paymentsway) => paymentsway._id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default SettingwaysTable;
