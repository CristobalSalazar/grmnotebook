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
  searchResult = () => {
    return <div />
  }
  search = e => {

    var results = []
    var query = e.target.value;
    var symbols = this.state.symbols;

    for (let i = 0; i < query.length; i++) {
      let currentCharacter = query[i].toUpperCase();
      let middle = Math.floor(symbols.length / 2);
      let searchChar = symbols[middle][i];

      //Binary search algorithm
      while (searchChar !== currentCharacter) {
        // higher in the alphabet
        if (searchChar > currentCharacter) {

        }
        // lower in the alphabet
        else if (searchChar < currentCharacter) {

        }
        // if equal add to results and break
        else {

          break;
        }
      }
    }
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
        <input className="text-input" onKeyUp={this.search} type="text" placeholder="Search symbols..." />

      </div>
    );
  }
}
