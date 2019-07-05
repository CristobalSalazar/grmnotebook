import React, { Component } from "react";

export default class Title extends Component {
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
      <div>
        <header className="Title">
          <h1 style={{ color: '#428bca' }}>{this.state.symbol}</h1>
          <br />
          <p> {this.state.companyName}</p>
        </header>
        <div style={this.descStyle}>
          <p><small>{this.state.description}</small></p>
          <br />
          <p style={{ color: 'gray' }}>Exchange: {this.state.exchange}</p>
          <br />
          <p style={{ color: 'gray' }}>Industry: {this.state.industry}</p>
        </div>
      </div >
    );
  }
  descStyle = {
    padding: '12px',
    fontSize: '14px'
  }
}