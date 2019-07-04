import React, { Component } from "react";
import Title from "./Title";
import Dashboard from "./Dashboard";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.getData(this.props.profile);
  }
  state = {};
  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.getData(this.props.profile);
    }
  }
  getData(profile) {
    this.props.iex.stock.company(profile).then(data => {
      console.log(data);
      this.setState({
        companyName: data.companyName,
        ceo: data.ceo,
        description: data.description,
        employees: data.employees,
        exchange: data.exchange,
        industry: data.industry,
        issueType: data.issueType,
        sector: data.sector,
        securityName: data.securityName,
        symbol: data.symbol,
        tags: data.tags,
        website: data.website
      });
    });
  }
  render() {
    return (
      <div className="Main">
        <Title profile={this.state.symbol} companyName={this.state.companyName} />
        <Dashboard profile={this.props.profile} />
      </div>
    );
  }
}
