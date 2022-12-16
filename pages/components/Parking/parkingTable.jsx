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
import {
  Getexportpark,
  GetexportparkSelect,
  GetexportparkSelectTime,
} from "../../api/export";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { TextField } from "@mui/material";
import "moment/locale/th"; // without this line it didn't work
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Grid, Card, Text } from "@nextui-org/react";
import jwt_decode from "jwt-decode";
const ParkingTable = () => {
  moment.locale("th");
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
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const [paymentsway, setPaymentways] = React.useState([]);
  const [value, setValue] = React.useState(moment(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [value2, setValue2] = React.useState(moment(new Date()));
  const [value3, setValue3] = React.useState(moment(new Date()));
  const [value4, setValue4] = React.useState(moment(new Date()));

  const handleChange3 = (newValue) => {
    setValue3(newValue);
  };
  const handleChange4 = (newValue) => {
    setValue4(newValue);
  };
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

  const getByselect = (e) => {
    const token = localStorage.getItem("token");
    const items =jwt_decode(token)

   
    e.preventDefault();
    GetexportparkSelect(items.company_id, value, value2).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Room${items}.xlsx`); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };
  const getByselectTime = (e) => {
    const token = localStorage.getItem("token");
    const items =jwt_decode(token)

    e.preventDefault();
    GetexportparkSelectTime(items.company_id, value3, value4).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Room${items}.xlsx`); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };
  const getExcel = (e) => {
    const token = localStorage.getItem("token");
    const items =jwt_decode(token)
    e.preventDefault();
    Getexportpark(items.company_id).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Room${items}.xlsx`); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };
  const getdata = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
    getparking(id.company_id)
      .then((res) => {
        console.log('====================================');
        console.log(res.data.data);
        console.log('====================================');
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
  const localizedTextsMap = {
    columnMenuUnsort: "não classificado",
    columnMenuSortAsc: "Classificar por ordem crescente",
    columnMenuSortDesc: "Classificar por ordem decrescente",
    columnMenuFilter: "Filtro",
    columnMenuHideColumn: "Ocultar",
    columnMenuShowColumns: "Mostrar colunas",
  };
  const [finalClickInfo, setFinalClickInfo] = React.useState(null);

  const handleOnCellClick = (params) => {
    setFinalClickInfo(params);
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Button variant="contained" onClick={(e) => getExcel(e)}>
        ออกรายแบบทั้งหมด
      </Button>
      <Button variant="contained" onClick={handleOpen}>
        ออกรายงานแบบเลือกวัน
      </Button>
      <Button variant="contained" onClick={handleOpen2}>
        ออกรายงานแบบเลือกช่วงเวลา
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid.Container gap={1} justify="center">
              <Grid xs={6}>
                <DesktopDatePicker
                  label="ตั้งแต่วันที่"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid xs={6}>
                <DesktopDatePicker
                  label="ถึงวันที่"
                  inputFormat="DD/MM/YYYY"
                  value={value2}
                  onChange={handleChange2}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid.Container>
          </LocalizationProvider>
          <Button variant="contained" fullWidth onClick={(e) => getByselect(e)}>
            ออกรายงานแบบเลือกวัน
          </Button>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid.Container gap={1} justify="center">
              <Grid xs={6}>
                <DateTimePicker
                  label="ตั้งแต่"
                  inputFormat="DD/MM/YYYY HH:mm"
                  value={value3}
                  onChange={handleChange3}
                  ampm={false}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid xs={6}>
                <DateTimePicker
                  label="ถึง"
                  inputFormat="DD/MM/YYYY HH:mm"
                  value={value4}
                  ampm={false}
                  onChange={handleChange4}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid.Container>
          </LocalizationProvider>
          <Button
            fullWidth
            variant="contained"
            onClick={(e) => getByselectTime(e)}
          >
            ออกรายงานแบบเลือกช่วงเวลา
          </Button>
        </Box>
      </Modal>
      <DataGrid
        rows={paymentsway}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
        localeText="th"
        getRowId={(paymentsway) => paymentsway._id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default ParkingTable;
