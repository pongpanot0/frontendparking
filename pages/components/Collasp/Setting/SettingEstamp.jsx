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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import jwt_decode from "jwt-decode";
import { getEstamp } from "../../../api/estamp";
import { Button } from "@mui/material";
import InsertEstamp from "./Insertfrm/InsertEstamp";
const SettingEstamp = () => {
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
      field: "_id",
      headerName: "chanel_payments_id",
      width: 300,
    },
    {
      field: "estamp_total",
      headerName: "estamp_total",
      width: 300,
    },
    {
      field: "estamp_uuid",
      headerName: "estamp_uuid",
      width: 300,
    },
    {
      field: "expireDate",
      headerName: "expireDate",
      width: 300,
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getdata = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);

    getEstamp(id.company_id)
      .then((res) => {
        console.log(res.data);
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
    <div>
      {" "}
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
          <InsertEstamp />
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

export default SettingEstamp;
