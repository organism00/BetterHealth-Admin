import React from "react";
import Chart from "react-apexcharts";

const DoctorAbility = () => {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Operation", "Therapy", "Mediation", "Cholesterol", "Heart Beat"],
    colors: [
      "rgb(50, 70, 211)",
      "rgb(0, 208, 255)",
      "rgb(238, 49, 88)",
      "rgb(255, 168, 0)",
      "rgb(5, 130, 95)",
    ], // custom colors
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = [41, 32, 23.8, 9.9, 8.7]; 

  return (
    <div className="donut-chart">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DoctorAbility;
