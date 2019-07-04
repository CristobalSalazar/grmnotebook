const { Notification } = require("electron");
module.exports = {
  showNotification(
    title = "",
    subtitle = "",
    body = "",
    icon = undefined,
    silent = false
  ) {
    if (Notification.isSupported()) {
      const notification = new Notification({
        title,
        subtitle,
        body,
        icon,
        silent,
        //plays default sound
        sound: ""
      });
      notification.show();
    }
  }
};
