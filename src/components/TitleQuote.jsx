import React, { Component } from "react";

export default class TitleQuote extends Component {
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
      console.log('Quote: ');
      console.log(data);
      this.setState({ data });
    });
  };
  showData() {
    const { changePercent, latestPrice, change, latestSource } = this.state.data;
    const pos = { color: "#5cb85c", marginRight: '12px' };
    const neg = { color: "#cc3333", marginRight: '12px' };
    let choice;
    if (changePercent > 0) {
      choice = pos;
    } else if (changePercent < 0) {
      choice = neg;
    }
    if (this.state.data) {
      return (
        <div className="TitleQuote" style={choice}>
          <h3>
            <small>$</small>
            {latestPrice}
          </h3>
          <h3>
            {(changePercent * 100).toFixed(2)}<small> %</small>
          </h3>
        </div>
      );
    } else {
    }
  }
  render() {
    return <div>{this.showData()}</div>;
  }
}
