import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <i
          onClick={() => this.props.setDrawer("Search")}
          className="fa fa-search"
          aria-hidden="true"
        />
        <i
          onClick={() => this.props.setDrawer("Watchlist")}
          className="fa fa-binoculars"
          aria-hidden="true"
        />
        <i
          onClick={() => this.props.setDrawer("News")}
          className="fa fa-globe"
          aria-hidden="true"
        />
        <i
          onClick={() => this.props.setDrawer("Notes")}
          className="fa fa-sticky-note"
          aria-hidden="true"
        />
      </div>
    );
  }
}
