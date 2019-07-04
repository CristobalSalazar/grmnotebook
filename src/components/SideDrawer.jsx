import React, { Component } from "react";
import WatchList from "./WatchList";
import BrowseList from "./BrowseList";

export default class SideDrawer extends Component {
  getDrawer(title) {
    switch (title) {
      case "Watchlist": {
        return <WatchList getWatchItem={this.props.getWatchItem} />;
      }
      case "Search": {
        return <BrowseList getWatchItem={this.props.getWatchItem} />;
      }
      default: {
        return <div />;
      }
    }
  }
  render() {
    return (
      <aside className={this.props.display ? "SideDrawer" : "hidden"}>
        <h2>{this.props.title}</h2>
        <br />
        {this.getDrawer(this.props.title)}
      </aside>
    );
  }
}
