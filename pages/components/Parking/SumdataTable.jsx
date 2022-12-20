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
import { getSumdata } from "../../api/parking";
import { GetexportSumdata, GetexportSumdataSelect } from "../../api/export";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import { TextField } from "@mui/material";
import "moment/locale/th"; // without this line it didn't work
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid } from "@nextui-org/react";
import jwt_decode from "jwt-decode";
const SumdataTable = () => {
  moment.locale("th");
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
  const [value2, setValue2] = React.useState(moment(new Date()));
  React.useEffect(() => {
    
    getdata();
  }, []);

  const columns = [
    {
      field: "_id",
      headerName: "เดือน",
      width: 400,
      valueFormatter: (params) => moment(params?.value).format("MMMM YYYY"),
    },
    {
      field: "totalSaleAmount",
      headerName: "totalSaleAmount",
      width: 400,
    },
  ];

  const getByselect = (e) => {
    const token = localStorage.getItem("token");
    const items = jwt_decode(token);

    console.log(moment(value2).format("yyyy-MM"));
    e.preventDefault();
    GetexportSumdataSelect(items.company_id, value, value2).then((response) => {
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
    const items = jwt_decode(token);
    e.preventDefault();
    GetexportSumdata(items.company_id).then((response) => {
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
    const id = jwt_decode(token);
    getSumdata(id.company_id)
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
      <Button variant="contained" onClick={(e) => getExcel(e)}>
        ออกรายแบบทั้งหมด
      </Button>
      <Button variant="contained" onClick={handleOpen}>
        ออกรายงานแบบเดือน
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
                <DatePicker
                  views={["year", "month"]}
                  label="Year and Month"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
              </Grid>
              <Grid xs={6}>
                <DatePicker
                  views={["year", "month"]}
                  label="Year and Month"
                  value={value2}
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
              </Grid>
            </Grid.Container>
          </LocalizationProvider>
          <Button variant="contained" fullWidth onClick={(e) => getByselect(e)}>
            ออกรายงานแบบเลือกเดือน
          </Button>
        </Box>
      </Modal>

      <DataGrid
        rows={paymentsway}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        localeText="th"
        getRowId={(paymentsway) => paymentsway._id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default SumdataTable;
