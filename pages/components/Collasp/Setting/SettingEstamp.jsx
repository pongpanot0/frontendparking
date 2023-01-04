import React from "react";
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
import { deleteestamp, getEstamp } from "../../../api/estamp";
import { Button } from "@mui/material";
import InsertEstamp from "./Insertfrm/InsertEstamp";
import Editestamp from "./Insertfrm/Editestamp";
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
  const [realid, setrealid] = React.useState("");

  React.useEffect(() => {
    getdata();
  }, []);
  const [editid, setEditid] = React.useState("");
  const [checkboxSelection, setCheckboxSelection] = React.useState("");
  console.log(checkboxSelection);
  const columns = [
    {
      field: "_id",
      headerName: "chanel_payments_id",
      width: 300,
    },
    {
      field: "estamp_name",
      headerName: "estamp_name",
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
    {
      field: "action",
      headerName: "Action",
      width: 300,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = (e) => {
          setrealid(params.row.estamp_id);
          setEditid(params.id);
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
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => setOpen2(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onDelete = () => {
    deleteestamp(checkboxSelection)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getdata = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);

    getEstamp(id.company_id)
      .then((res) => {
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
      <Button auto shadow onClick={(e) => onDelete(e)}>
        delte
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
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Editestamp id={editid} realid={realid} />
        </Box>
      </Modal>
      <DataGrid
        rows={paymentsway}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        checkboxSelection
        onSelectionModelChange={(itm) => setCheckboxSelection(itm)}
        getRowId={(paymentsway) => paymentsway._id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default SettingEstamp;
