import React, { Component } from "react";
import Chart from "react-apexcharts";
import ChartOptions from '../ChartOptions'

export default class SampleChart extends Component {
  state = {
    options: new ChartOptions().bar,
    series: [{
      name: "Close",
      data: []
    }]
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.getData();
    }
  }
  getData() {
    let options = new ChartOptions().bar
    options.title.text = "5 Day Close Price";
    options.tooltip.style = {
      background: 'black'
    }
    let series = [{ name: "Close", data: [] }]
    this.props.iex.stock.historicalPrices(this.props.profile, '5d').then(data => {
      for (let d of data) {
        options.xaxis.categories.push(d.label)
        series[0].data.push(d.close);
      }
      this.setState({ options, series })
    });
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
