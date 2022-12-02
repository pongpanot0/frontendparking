import React from "react";
import { getSettingwaysPayments } from "../../../api/setting";
import {
  DataGrid,
  GridColumnHeaderFilterIconButton,
  GridFilterForm,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton
} from "@mui/x-data-grid";

import { Button, Text, Input, Row, Checkbox, Link } from "@nextui-org/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Settingways from "./Settingways";
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

  const columns = [
    {
      field: "chanel_payments_id",
      headerName: "chanel_payments_id",
      width: 200,
    },
    {
      field: "chanel_payments_name",
      headerName: "chanel_payments_name",
      width: 200,
    },
    {
      field: "chanel_payments_detail",
      headerName: "chanel_payments_detail",
      width: 200,
    },
    {
      field: "chanel_id",
      headerName: "chanel_id",
      type: "number",
      width: 200,
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getdata = () => {
    const id = localStorage.getItem("company_id");
    getSettingwaysPayments(id)
      .then((res) => {
        console.log(res.data.data);
        setPaymentways(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function CustomToolbar({setFilterButtonEl }) {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton/>
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
      <DataGrid
        rows={paymentsway}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(paymentsway) => paymentsway.chanel_payments_id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default SettingwaysTable;
