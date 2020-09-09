import React from "react";
import ReactApexChart from "react-apexcharts";
import { round } from "lodash";

class DounutChartP2 extends React.Component {
  constructor(props) {
    super(props);

    console.log("This is data for pie:",props.data.map(c=>c.label))
    this.state = {
      series: props.data.map(c=>c.value),
      options: {
        labels: props.data.map(c=>(c.label.substring(6,28)+"...")),
        chart: {
          type: "donut"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

export default DounutChartP2;