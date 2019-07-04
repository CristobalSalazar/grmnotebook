import React, { Component } from "react";
import WatchItem from "./WatchItem";
const ipcr = window.electron.ipcRenderer;

export default class WatchList extends Component {
  state = {
    watchSymbols: []
  };
  constructor(props) {
    super(props);
    this.state = {
      watchSymbols: []
    };
    ipcr.send("m/watchList");
    ipcr.on("r/watchList", this.updateList);
  }
  componentWillUnmount() {
    ipcr.removeListener("r/watchList", this.updateList);
  }
  updateList = (e, data) => {
    console.log(data);
    this.setState({ watchSymbols: data.watchSymbols });
  };
  addItem = e => {
    if (e.key === "Enter") {
      let symbol = e.target.value;
      symbol = symbol.trim().toUpperCase();
      e.target.value = "";
      ipcr.send("m/watchList/add", symbol);
    }
  };
  removeItem = (e, data) => {
    e.stopPropagation();
    ipcr.send("m/watchList/remove", data);
  };
  render() {
    return (
      <div>
        <input
          className="text-input"
          id="add-watch-item"
          onKeyDown={this.addItem}
          type="text"
          placeholder="Add symbol..."
        />
        {this.state.watchSymbols.map((val, i) => {
          return (
            <WatchItem
              key={i}
              getWatchItem={this.props.getWatchItem}
              name={val}
              onDelete={this.removeItem}
            />
          );
        })}
      </div>
    );
  }
}
