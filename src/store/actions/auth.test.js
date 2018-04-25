import * as actionTypes from "./actionTypes";
import * as actions from "./auth";

describe("Auth actions", () => {
  it("should create authStart action", () => {
    const expectedAction = {
      type: actionTypes.AUTH_START
    };
    expect(actions.authStart()).toEqual(expectedAction);
  });

  it("should create authSuccess action", () => {
    const expectedAction = {
      type: actionTypes.AUTH_SUCCESS
    };
    expect(actions.authSuccess()).toEqual(expectedAction);
  });

  it("should create authFail action", () => {
    const expectedAction = {
      type: actionTypes.AUTH_FAIL
    };
    expect(actions.authFail()).toEqual(expectedAction);
  });

  it("should create login (async) action", () => {
    // Async action creator
  });

  it("should create signup (async) action", () => {
    // Async action creator
  });

  it("should create checkAuthStorage action", () => {
    // Async action
  });

  it("should create logout action", () => {
    const expectedAction = {
      type: actionTypes.LOGOUT
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});
