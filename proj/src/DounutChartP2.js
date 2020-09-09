import React from "react";
import ReactApexChart from "react-apexcharts";
import { round } from "lodash";

class DounutChartP2 extends React.Component {
  constructor(props) {
    super(props);

    console.log("This is data for pie:", props.data);
    this.state = {
      //series: props.data.map((c) => c.value),
      options: {
        legend: {
          labels: {
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
        },
        // labels: props.data.map((c) => c.label.substring(6, 28) + "..."),
        chart: {
          type: "donut",
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
                labels: {
                  colors: [
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                  ],
                },
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
          labels={this.props.data.map((c) => c.label.substring(6, 28) + "...")}
          options={{
            ...this.state.options,
            labels: this.props.data.map(
              (c) => c.label.substring(6, 28) + "..."
            ),
          }}
          series={this.props.data.map((c) => c.value)}
          type="donut"
        />
      </div>
    );
  }
}

export default DounutChartP2;
