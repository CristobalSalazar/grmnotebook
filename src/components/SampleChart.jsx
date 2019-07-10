import React, { Component } from "react";
import Chart from "react-apexcharts";
import ChartOptions from '../ChartOptions'

export default class SampleChart extends Component {
  state = {
    options: new ChartOptions().bar,
    series: [{
      name: "",
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
    let series = [{ name: "Close", data: [] }, { name: "Open", data: [] }]

    options.title.text = "5 Day Prices";
    this.props.iex.stock.quote(this.props.profile).then(data => {
      console.log(data);
    })
    this.props.iex.stock.historicalPrices(this.props.profile, '5d').then(data => {
      console.log(data);
      for (let d of data) {
        options.xaxis.categories.push(d.label)
        series[0].data.push(d.close);
        series[1].data.push(d.open);

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
          type="line"
          width="500"
        />
      </div>
    );
  }
}
