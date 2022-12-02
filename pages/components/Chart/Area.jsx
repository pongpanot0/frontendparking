import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const Area = () => {
    const data = {
          
        series: [{
          name: "STOCK ABC",
          data: [
            '1',
            '2'
          ]
        }],
        options: {
          chart: {
            type: 'area',
            height: 350,
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          
          title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left'
          },
          subtitle: {
            text: 'Price Movements',
            align: 'left'
          },
          labels:[
            '1',
            '2'
          ],
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            opposite: true
          },
          legend: {
            horizontalAlign: 'left'
          }
        },
      
      
      };
    
  return (
    <div id="chart">
      <ApexCharts
        options={data.options}
        series={data.series}
        type="area"
      
      />
    </div>
  );
};

export default Area;
