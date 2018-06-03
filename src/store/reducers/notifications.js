import * as actionTypes from "../actions/actionTypes";

const initialState = {
  type: null,
  message: null
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTIFICATION:
      return {
        ...state,
        type: action.notification.type,
        message: action.notification.message
      };
    case actionTypes.DISMISS_NOTIFICATION:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default notifications;
