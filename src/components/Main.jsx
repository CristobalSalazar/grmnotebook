import React, { Component } from "react";
import Title from "./Title";
import Dashboard from "./Dashboard";

export default class Main extends Component {

  render() {
    return (
      <div className="Main">
        <Title iex={this.props.iex} profile={this.props.profile} />
        <Dashboard iex={this.props.iex} profile={this.props.profile} />
      </div>
    );
  }
}
