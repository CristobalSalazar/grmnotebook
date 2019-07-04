import React, { Component } from "react";
import WatchItem from "./WatchItem";
const ipcr = window.electron.ipcRenderer;

export default class BrowseList extends Component {
  state = {
    watchSymbols: []
  };
  constructor(props) {
    super(props);
    this.state = {
      symbols: []
    };
    ipcr.send("m/symbols");
    ipcr.on("r/symbols", this.updateList);
  }
  componentWillUnmount() {
    ipcr.removeListener("r/symbols", this.updateList);
  }
  updateList = (e, data) => {
    console.log(data);
    this.setState({ symbols: data.symbols });
  };
  render() {
    return (
      <div>
        <input className="text-input" type="text" placeholder="Search symbols..." />
        {this.state.symbols.map((val, i) => {
          if (i < 100) {
            return <WatchItem key={i} getWatchItem={this.props.getWatchItem} name={val} />;
          }
        })}
      </div>
    );
  }
}
