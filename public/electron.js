const { app, BrowserWindow, dialog } = require("electron");
const notifications = require("./electron/notifications");
// Check for development environment
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 5000,
    height: 5000,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + "/electron/preload.js",
      webSecurity: false
    }
  });

  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", function() {
  createWindow();
  notifications.showNotification("Welcome to Reactron");
  console.log("Electron ready");
  // Add React extension to devtools, once added comment this section out
  BrowserWindow.addDevToolsExtension(path.join(__dirname, "/../extensions/react3.6.0_0"));
});
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function() {
  if (mainWindow === null) {
    console.log("app reactivated");
    createWindow();
  }
});

const eventListener = require("./electron/controller");

eventListener.init();
