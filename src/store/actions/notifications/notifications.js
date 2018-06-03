import * as actionTypes from "../actionTypes";

export const setNotification = notification => ({
  type: actionTypes.SET_NOTIFICATION,
  notification
});

export const dismissNotification = () => ({
  type: actionTypes.DISMISS_NOTIFICATION
});
