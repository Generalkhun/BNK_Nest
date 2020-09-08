import React from "react";
import ReactApexChart from 'react-apexcharts'
import FirstbarGraphDataCal from "./FirstbarGraphDataCal.js"
import {category} from "./util.js"

class FirstBarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: FirstbarGraphDataCal()
        }],
        options: {
            legend:{
                show:false
            },
          chart: {
            type: 'bar',
            height: 1000
          },
          plotOptions: {
            bar: {
              barHeight: '100%',
              distributed: true,
              horizontal: true,
              dataLabels: {
                position: 'bottom'
              },
            }
          },
          colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7'
          ],
          dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: category,
          },
          yaxis: {
            labels: {
              show: false
            }
          },
          title: {
              text: 'Custom DataLabels',
              align: 'center',
              floating: true
          },
          subtitle: {
              text: 'Category Names as DataLabels inside bars',
              align: 'center',
          },
          tooltip: {
            theme: 'dark',
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return ''
                }
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={600} />
</div>


      );
    }
  }


export default FirstBarChart;