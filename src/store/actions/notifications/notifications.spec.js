import * as actionTypes from "../actionTypes";
import * as actions from "./notifications";

describe("Notification actions", () => {
  const notification = {
    type: "DANGER",
    message: "Lorem Ipsum"
  };
  const error = "Lorem Ipsum";

  it("should create setNotification action", () => {
    const expectedAction = {
      type: actionTypes.SET_NOTIFICATION,
      notification
    };
    expect(actions.setNotification(notification)).toEqual(expectedAction);
  });

  it("should create dismissNotification action", () => {
    const expectedAction = {
      type: actionTypes.DISMISS_NOTIFICATION
    };
    expect(actions.dismissNotification()).toEqual(expectedAction);
  });
});
