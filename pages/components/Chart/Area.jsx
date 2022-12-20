import React from "react";
import dynamic from "next/dynamic";
import { getSumdata } from "../../api/parking";
import moment from "moment";
import "moment/locale/th";
import jwt_decode from "jwt-decode";
import { getTheme } from "../../api/theme";
import { useSession } from "next-auth/react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const Area = () => {

  const getdata = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    console.log(id.company_id);
    getSumdata(id.company_id)
      .then((row) => {
        settotalSaleAmount(row.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [primary, setPrimary] = React.useState("#1976d2");
  const [colors, setColors] = React.useState("#1976d2");
  const getColor = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    console.log(id.company_id);
    getTheme(id.company_id).then((res) => {
      setPrimary(res.data.data[0].paimaryButton);
      setColors(res.data.data[0]);
    });
  };

  React.useEffect(() => {
    if (primary !== "#1976d2" && colors !== "#1976d2") {
      return;
    }
    getColor();
    getdata();
  }, [primary, colors]);

  const [totalSaleAmount, settotalSaleAmount] = React.useState([]);

  const sumfill = totalSaleAmount.map((row) => row.totalSaleAmount);
  const datefill = totalSaleAmount.map((row) =>
    moment(row._id, "yyyy-MM").format("MMMM yy")
  );

  const data = {
    series: [
      {
        name: `ยอดรวมประจำเดือน`,
        data: sumfill,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      fill: {
        colors: primary,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "totalSaleAmount",
        align: "left",
      },
      grid: {
        row: {
          colors: colors, // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: datefill,
      },
    },
  };
  return (
    <div id="chart" style={{ width: "100%" }}>
      <ApexCharts options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default Area;
