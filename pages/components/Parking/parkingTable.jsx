import React from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getparking } from "../../api/parking";
import { Getexportpark } from "../../api/export";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { TextField } from "@mui/material";
import 'moment/locale/th'  // without this line it didn't work

const ParkingTable = () => {
  moment.locale('th')
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
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentsway, setPaymentways] = React.useState([]);
  const [value, setValue] = React.useState(moment(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [value2, setValue2] = React.useState(moment(new Date()));

  const handleChange2 = (newValue) => {
    setValue2(newValue);
  };
  React.useEffect(() => {
    getdata();
  }, []);

  const columns = [
    {
      field: "parking_start",
      headerName: "parking_start",
      width: 400,
    },
    {
      field: "parking_end",
      headerName: "parking_end",
      width: 400,
    },
  ];

  const getExcel = (e) => {
    const items = localStorage.getItem("company_id");
    e.preventDefault();
    Getexportpark(items).then((response) => {
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Room${items}.xlsx`); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };
  const getdata = () => {
    const id = localStorage.getItem("company_id");
    getparking(id)
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
    <div style={{ height: 400, width: "100%" }}>
      <Button onClick={handleOpen}>Export</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Button onClick={(e) => getExcel(e)}>ออกรายแบบทั้งหมด</Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="ตั้งแต่วันที่"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
              <DesktopDatePicker
              label="ถึงวันที่"
              inputFormat="DD/MM/YYYY"
              value={value2}
              onChange={handleChange2}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button onClick={(e) => getExcel(e)}>ออกรายงานแบบเลือกวัน</Button>
        </Box>
      </Modal>
      <DataGrid
        rows={paymentsway}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(paymentsway) => paymentsway._id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default ParkingTable;
