const { dialog } = require("electron").remote;

module.exports = {
  showDialog(window, callback) {
    const options = {
      title,
      defaultPath,
      buttonLabel,
      filters,
      properties: "OpenFile"
    };
    dialog.dialog.showOpenDialog(window, options, callback);
  }
};
