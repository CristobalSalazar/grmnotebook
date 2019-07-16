const { ipcMain, shell } = require("electron");
const fs = require("fs");
const path = require("path");
const IEX = require("../../src/libs/IEX");
var watchList = require("../data/WatchList.json");
const symbolsData = require("../data/Symbols.json");

module.exports = {
  init: function() {
    // --- Debug ---
    ipcMain.on("m/log", (e, message) => {
      console.log(message);
    });
    // -- React Mounted ---
    ipcMain.on("m/appDidMount", e => {
      console.log("React has mounted");
    });
    // --- Symbols ---
    ipcMain.on("m/symbols", e => {
      fs.access(path.join(__dirname, "../data/Symbols.json"), err => {
        if (err) {
          symbols = [];
          const iex = new IEX("Tpk_3724ae6e28174771b450a8b228722ff9", true);
          iex.symbols().then(data => {
            for (let item of data) {
              symbols.push(item.symbol);
            }
            fs.writeFile(
              path.join(__dirname, "../data/Symbols.json"),
              JSON.stringify({
                symbols: symbols
              }),
              err => {
                if (err) {
                  console.error(err);
                }
              }
            );
          });
        } else {
          e.sender.webContents.send("r/symbols", symbolsData);
        }
      });
    });
    // --- Retrieve Watchlist ---
    ipcMain.on("m/watchList", e => {
      e.sender.webContents.send("r/watchList", watchList);
    });
    // --- Remove from Watchlist ---
    ipcMain.on("m/watchList/remove", (e, data) => {
      watchList.watchSymbols = watchList.watchSymbols.filter(val => {
        return val !== data;
      });
      fs.writeFile(
        path.join(__dirname, "../data/WatchList.json"),
        JSON.stringify(watchList),
        err => {
          if (err) {
            console.error(err);
          } else {
            e.sender.webContents.send("r/watchList", watchList);
          }
        }
      );
    });
    // --- Add to Watchlist ---
    ipcMain.on("m/watchList/add", (e, data) => {
      if (watchList.watchSymbols.includes(data)) {
        shell.beep();
        return;
      }
      watchList.watchSymbols.push(data);
      fs.writeFile(
        path.join(__dirname, "../data/WatchList.json"),
        JSON.stringify(watchList),
        err => {
          if (err) {
            console.error(err);
          } else {
            e.sender.webContents.send("r/watchList", watchList);
          }
        }
      );
    });
    // --- Open In Browser ---
    ipcMain.on("m/open", (e, data) => {
      shell.openExternal(data);
    });
  }
};
