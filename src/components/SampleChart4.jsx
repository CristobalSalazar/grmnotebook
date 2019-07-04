import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class SampleChart4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        colors: ["#5cb85c"],
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: ["#111"],
            opacityFrom: 0,
            opacityTo: 0.5,
            stops: [0, 100]
          }
        },
        grid: {
          show: true,
          borderColor: "#cc3333",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
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
          curve: "straight",
          lineCap: "butt",
          width: 2
        },
        title: {
          text: "Sample Chart 4",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "24px",
            color: "#5cb85c"
          }
        },
        tooltip: {
          enabled: true,
          followCursor: false,
          theme: "dark",
          style: {
            fontSize: "14px",
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
          background: "",
          forecolor: "#fff",
          dropShadow: {
            enabled: true,
            enabledOnSeries: false,
            top: 3,
            blur: 3,
            color: "#000",
            opacity: 1
          },
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            autoSelected: "zoom"
          },
          zoom: {
            enabled: true,
            type: "xy",
            autoScaleYaxis: true,
            zoomedArea: {
              fill: {
                opacity: 0.4
              },
              stroke: {
                color: "#5cb85c",
                opacity: 0.4,
                width: 1
              }
            }
          }
        },
        xaxis: {
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
          axisBorder: {
            show: true
          },
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
          type="area"
          width="500"
        />
      </div>
    );
  }
}
