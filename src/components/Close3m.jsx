import React, { Component } from "react";
import Chart from "react-apexcharts";
import ChartOptions from "../ChartOptions";

export default class SampleChart extends Component {
  state = {
    options: new ChartOptions().bar,
    series: [
      {
        name: "",
        data: []
      }
    ]
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.getData();
    }
  }
  getData() {
    let options = new ChartOptions().bar;
    let series = [
      { name: "Close", data: [] },

    ];
    options.grid.xaxis.lines.show = false;
    options.title.text = "Close Price";
    options.subtitle.text = "3 Months";
    options.xaxis.labels.show = false;

    options.xaxis.axisBorder.show = false;
    this.props.iex.stock.historicalPrices(this.props.profile, "3m").then(data => {
      for (let item of data) {
        series[0].data.push({ x: item.label, y: item.close });

      }
      this.setState({ options, series });
    });
  }
  render() {
    return (
      <Chart
        className="Chart-long"
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="1000"
      />
    );
  }
}
