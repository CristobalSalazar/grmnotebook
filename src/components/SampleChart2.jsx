import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class SampleChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        grid: {
          show: true,
          borderColor: "#cc3333",
          strokeDashArray: 6,
          position: "back",
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            opacity: 0.1
          },
          column: {
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: Math.random() > 0.5 ? "smooth" : "straight",
          lineCap: "butt",
          colors: undefined,
          width: 3,
          dashArray: 0
        },
        title: {
          text: "Sample Chart 2",
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
        crosshairs: {
          show: true,
          position: "front",
          stroke: {
            color: "#b6b6b6",
            width: 1,
            dashArray: 6
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
        chart: {
          forecolor: "#000",
          background: "(0,0,0,0)",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              colors: "#f1f1f1"
            }
          }
        },
        yaxis: {
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
          type="line"
          width="500"
        />
      </div>
    );
  }
}
