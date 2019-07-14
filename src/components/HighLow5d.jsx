import React, { Component } from "react";
import Chart from "react-apexcharts";
import ChartOptions from "../ChartOptions";

export default class SampleChart2 extends Component {
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
      { name: "High", data: [] },
      { name: "Low", data: [] },
      { name: "Average  ", data: [] }
    ];
    options.title.text = "High/Low";
    options.subtitle.text = "5 Days";

    this.props.iex.stock.historicalPrices(this.props.profile, "5d").then(data => {
      for (let item of data) {
        series[0].data.push({ x: item.label, y: item.high });
        series[1].data.push({ x: item.label, y: item.low });
        series[2].data.push({ x: item.label, y: (item.high + item.low) / 2 });
      }
      this.setState({ options, series });
    });
  }
  render() {
    return (
      <Chart
        className="Chart"
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="500"
      />
    );
  }
}
