import React from "react";
import dynamic from "next/dynamic";
import moment from "moment";
import { getCounthLogs } from "../../api/parking";
import { getTheme } from "../../api/theme";
import jwt_decode from "jwt-decode";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Line = () => {
  const [getCounth, setgetCounth] = React.useState([]);
  const [primary, setPrimary] = React.useState("#1976d2");
  React.useEffect(() => {
    if (!primary) {
      return;
    }
    getColor();
    getData();
  }, [primary]);
  const getColor = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
    getTheme(id.company_id).then((res) => {
      setPrimary(res.data.data[0].paimaryButton);
    });
  };
  const getData = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
    getCounthLogs(id.company_id)
      .then((row) => {
        setgetCounth(row.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const cate = getCounth.map((row) =>
    moment(row._id, "yyyy-MM").format("MMMM yy")
  );
  const data = getCounth.map((row) => row.count);
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: cate,
      },
      fill: {
        colors: primary,
      },
    },

    series: [
      {
        name: "series-1",
        data: data,
      },
    ],
  };

  return (
    <div className="mixed-chart" style={{ width: "100%" }}>
      <ApexCharts options={state.options} series={state.series} type="bar" />
    </div>
  );
};

export default Line;
