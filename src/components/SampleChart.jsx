import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class SampleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        grid: {
          borderColor: "#444",
          row: {
            opacity: 0.01
          }
        },
        title: {
          text: "Sample Chart",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "24px",
            color: "#fff"
          }
        },
        tooltip: {
          enabled: true,
          followCursor: false,
          theme: "dark",
          style: {
            fontSize: "12px",
            fontFamily: undefined
          },
          onDatasetHover: {
            highlightDataSeries: true
          },
          marker: {
            show: false
          }
        },
        theme: {},
        chart: {
          background: "(0,0,0,0)",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          type: "years",
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          axisBorder: {
            show: true
          },
          labels: {
            style: {
              colors: "#f1f1f1"
            }
          }
        },
        yaxis: {
          show: true,

          labels: {
            style: {
              color: "#f1f1f1"
            }
          }
        }
      },
      series: [
        {
          name: "series-1",
          data: [
            Math.round(Math.random() * 50) + 10,
            Math.round(Math.random() * 50) + 10,
            Math.round(Math.random() * 50) + 10,
            Math.round(Math.random() * 50) + 10,
            Math.round(Math.random() * 50) + 10,
            Math.round(Math.random() * 50) + 10,
            Math.round(Math.random() * 50) + 10,
            Math.round(Math.random() * 50) + 10
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Chart
          className="Chart"
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
        />
      </div>
    );
  }
}
