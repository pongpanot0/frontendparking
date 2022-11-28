import React from "react";
import { getSettingwaysPayments } from "../../../api/setting";
import { DataGrid } from "@mui/x-data-grid";
const SettingwaysTable = () => {
  const [paymentsway, setPaymentways] = React.useState([]);
  React.useEffect(() => {
    getdata();
  }, []);
  const columns = [
    { field: "chanel_payments_id", headerName: "ID", width: 70 },
    { field: "chanel_payments_name", headerName: "First name", width: 130 },
    { field: "chanel_payments_detail", headerName: "Last name", width: 130 },
    {
      field: "chanel_id",
      headerName: "Age",
      type: "number",
      width: 90,
    },
  ];

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

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={paymentsway}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(paymentsway) => paymentsway.chanel_payments_id}
      />
    </div>
  );
};

export default SettingwaysTable;
