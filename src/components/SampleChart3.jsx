import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class SampleChart3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        grid: {
          strokeDashArray: 12,
          show: false
        },
        title: {
          text: "Sample Chart 3",
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
        noData: {
          text: "No Data Available",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#cc3333",
            fontSize: "32px",
            fontFamily: undefined
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
          background: "",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          axisBorder: {
            show: false
          }
        }
      },
      series: [
        {
          name: "series-1",
          data: []
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
