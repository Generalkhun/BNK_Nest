import React from "react";
import ReactApexChart from "react-apexcharts";
import FirstbarGraphDataCal from "./FirstbarGraphDataCal.js";
import {
  category,
  dataToJSONObject,
  category2,
  stringToInterger,
} from "./util.js";
import { round } from "lodash";
import "./index.css";
import data2 from "./sample2.json";
const data2Object = dataToJSONObject(data2);
class SecondBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: data2Object.map((s) => stringToInterger(s.sum)),
        },
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          type: "bar",
          events: {
            dataPointSelection: (event, chartContext, config) => {
              //console.log(config.dataPointIndex);
              this.props.setFilter(config.dataPointIndex + 1);
              console.log(this.props.filter);
            },
          },
        },
        plotOptions: {
          bar: {
            barHeight: "100%",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        colors: [
          "#f9a3a4",
          "#90ee7e",
          "#f48024",
          "#69d2e7",
          "#33b2df",
          "#546E7A",
          "#d4526e",
          "#13d8aa",
          "#A5978B",
          "#2b908f",
          "#546E7A",
          "#d4526e",
          "#13d8aa",
          "#A5978B",
          "#2b908f",
        ],
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
            fontFamily: "Anakotmai",
          },
          formatter: function (val, opt) {
            return (
              opt.w.globals.labels[opt.dataPointIndex] +
              ":  " +
              round(val / 1000000)
            );
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        xaxis: {
          categories: category2,
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        title: {
          text: "",
          align: "center",
          floating: true,
        },
        subtitle: {
          text: "แยกตามแผนงาน (ล้านบาท)",
          align: "left",
          style: {
            color: "white",
            fontFamily: "Anakotmai",
          },
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <button
          onClick={() => {
            console.log(data2Object);
          }}
        >
          lg
        </button>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={525}
        />
      </div>
    );
  }
}

export default SecondBarChart;
