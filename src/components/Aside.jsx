import React, { Component } from "react";
import Sidebar from "./Sidebar";
import SideDrawer from "./SideDrawer";

export default class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      display: false
    };
  }
  setDrawer = selection => {
    if (this.state.selected === selection) {
      this.setState({ display: false, selected: undefined });
    } else {
      this.setState({
        display: true,
        selected: selection
      });
    }
  };
  render() {
    const { selected, display } = this.state;
    return (
      <div className="Aside">
        <Sidebar setDrawer={this.setDrawer} />
        <SideDrawer
          iex={this.props.iex}
          profile={this.props.profile}
          getWatchItem={this.props.getWatchItem}
          display={display}
          title={selected}
        />
      </div>
    );
  }
}
