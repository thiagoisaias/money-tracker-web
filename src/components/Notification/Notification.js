import React from "react";
import PropTypes from "prop-types";

import Danger from "./NotificationTypes/Danger";
import Success from "./NotificationTypes/Success";
import Warning from "./NotificationTypes/Warning";

const NOTIFICATION_COMPONENTS = {
  DANGER: Danger,
  SUCCESS: Success,
  WARNING: Warning
};

const Notification = props => {
  const { type, ...rest } = props;
  const CurrentNotification = NOTIFICATION_COMPONENTS[type];
  return type ? <CurrentNotification {...rest} /> : null;
};

Notification.propTypes = {
  type: PropTypes.oneOf(["DANGER", "SUCCESS", "WARNING"]),
  message: PropTypes.string,
  onDismiss: PropTypes.func
};

export default Notification;
