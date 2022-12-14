import React from "react";
import dynamic from "next/dynamic";
import { getParkin } from "../../api/parking";
import { settingCompany } from "../../api/setting";
import jwt_decode from "jwt-decode";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const Pie = () => {
  React.useEffect(() => {
    getData();
    getParklots();
  }, []);
  const [getin, setGetin] = React.useState([]);
  
  const [company_lots, setcompany_lots] = React.useState([]);
  const getData = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)

    getParkin(id.company_id).then((res) => {
      setGetin(res.data.data[0].count);
    });
  };
  const getParklots = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
    settingCompany(id.company_id).then((res) => {
      
      setcompany_lots(res.data.data[0].company_lots);
    });
  };

  const state = {
    series: [getin, company_lots - getin],
    options: {
      chart: {
        type: "pie",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
            },
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      labels: ["ที่จอดรถใช้งานอยู่", "ที่จอดรถว่าง"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart" style={{ width: "100%" }}>
      <ApexCharts
        options={state.options}
        series={state.series}
        type="pie"
        width="100%"
      />
    </div>
  );
};

export default Pie;
