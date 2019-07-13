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
      symbols: [],
      results: []
    };
    ipcr.send("m/symbols");
    ipcr.on("r/symbols", this.updateList);
  }
  search = event => {
    var query = event.target.value.toString().toUpperCase();
    var data = this.state.symbols;
    var start = 0;
    var end = data.length - 1;
    var current = Math.floor((start + end) / 2);

    // --- PRE SEARCH EXITS ---
    if (!query.match(/^[a-zA-Z0-9\-]+$/)) {
      this.setState({ results: [] });
      return;
    }
    // --- BINARY SEARCH ---
    for (let i = 0; i < query.length; i++) {
      // validate query character
      let iterationCount = 0;
      const maxIterationCount = 50;
      let dataChar;
      let searchChar;
      if (query[i].match(/[a-z]/)) {
        searchChar = query[i].toUpperCase();
      } else {
        searchChar = query[i];
      }
      // Set start and end points around data array
      while (true) {
        iterationCount++;
        // --- EXITS ---
        if (iterationCount > maxIterationCount) {
          // Unable to find result
          this.setState({ results: [] });
          return;
        }
        if (end - start < 3) {
          for (let j = start; j <= end; j++) {
            if (data[j] === query) {
              this.setState({ results: [data[j]] });
              return;
            }
          }
        }
        // validate data character
        if (i < data[current].length - 1) {
          dataChar = data[current][i].toUpperCase();
        } else {
          dataChar = data[current][data[current].length - 1].toUpperCase();
        }
        if (searchChar < dataChar) {
          end = current;
        } else if (searchChar > dataChar) {
          start = current;
        }
        current = Math.ceil((start + end) / 2);
        if (i < data[current].length) {
          dataChar = data[current][i].toUpperCase();
        } else {
          dataChar = data[current][data[current].length];
        }
        if (dataChar === searchChar) {
          start = current;
          end = current;
          while (start >= 0 && data[start][i] === searchChar) {
            start--;
          }
          start++;
          while (end < data.length && data[end][i] === searchChar) {
            end++;
          }
          end--;
          break; // to next iteration of for loop
        }
      }
    }
    var results = [];
    for (let i = start; i <= end; i++) {
      results.push(data[i]);
    }
    this.setState({ results });
  };
  componentWillUnmount() {
    ipcr.removeListener("r/symbols", this.updateList);
  }
  updateList = (e, data) => {
    this.setState({ symbols: data.symbols });
  };
  render() {
    return (
      <div>
        <input
          className="text-input"
          onKeyUp={this.search}
          type="text"
          placeholder="Search symbols..."
        />
        {this.state.results.map((val, i) => {
          return <WatchItem getWatchItem={this.props.getWatchItem} key={i} name={val} />;
        })}
      </div>
    );
  }
}
