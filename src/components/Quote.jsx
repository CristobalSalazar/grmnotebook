import React, { Component } from "react";

export default class Quote extends Component {
  componentDidMount() {
    this.getData();
  }
  state = {
    data: {}
  };
  styleGreen = {
    color: "#5cb85c"
  };
  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.getData();
    }
  }
  getData = () => {
    this.props.iex.stock.quote(this.props.profile).then(data => {
      this.setState({ data });
    });
  };
  showData() {
    const { changePercent, latestPrice, change, latestSource } = this.state.data;
    const pos = { color: "#5cb85c" };
    const neg = { color: "#cc3333" };
    let choice;
    if (changePercent > 0) {
      choice = pos;
    } else if (changePercent < 0) {
      choice = neg;
    }
    if (this.state.data) {
      return (
        <div>
          <p>Latest {latestSource} Price</p>

          <h1>
            <small>$ </small>
            {latestPrice}
          </h1>
          <br />
          <p>Change</p>
          <span>
            <h1 style={choice}>
              <small style={choice}>$ </small>
              {change}
            </h1>
            <h1 style={choice}>
              <small style={choice}>% </small>
              {(changePercent * 100).toFixed(2)}
            </h1>
          </span>
          <br />
        </div>
      );
    } else {
    }
  }
  render() {
    return <div>{this.showData()}</div>;
  }
}
