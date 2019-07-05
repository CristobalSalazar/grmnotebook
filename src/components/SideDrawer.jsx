import React, { Component } from "react";
import WatchList from "./WatchList";
import BrowseList from "./BrowseList";
import News from "./News";
import Resizer from "./Resizer";

export default class SideDrawer extends Component {
  getDrawer(title) {
    switch (title) {
      case "Watchlist": {
        return <WatchList getWatchItem={this.props.getWatchItem} />;
      }
      case "Search": {
        return <BrowseList getWatchItem={this.props.getWatchItem} />;
      }
      case "News": {
        return <News iex={this.props.iex} profile={this.props.profile} />;
      }
      default: {
        return <div />;
      }
    }
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <aside className={this.props.display ? "SideDrawer" : "hidden"}>
          <h2>{this.props.title}</h2>
          <br />
          {this.getDrawer(this.props.title)}
        </aside>
        <Resizer display={this.props.display} />
      </div>
    );
  }
}
