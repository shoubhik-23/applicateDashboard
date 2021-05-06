import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
function ChartComponent(props) {
  const [state, setState] = useState({
    teams: ["7/1/2020", "7/2/2020", "7/3/2020", "7/4/2020"],
    runs: [20000, 30000, 22000, 45000],
    year: 2008,
    loading: false,
  });
  let highdata = {
    chart: {
      type: "line",
    },
    title: {
      text: "Daily Order Trend ",
      style: {
        color: "rgb(46, 42, 42)",
        fontWeight: 570,
        opacity: 0.8,
      },
    },

    xAxis: {
      categories: state.teams,
      crosshair: true,
    },
    yAxis: {
      lineWidth: 1,
      tickAmount: 8,

      min: 0,
      title: {
        text: "Amount",
      },
    },

    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Order Amount",

        data: state.runs,
        color: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={highdata}
      ></HighchartsReact>
    </>
  );
}

export default ChartComponent;
