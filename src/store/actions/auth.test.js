import * as actionTypes from "./actionTypes";
import * as actions from "./auth";

describe("Auth actions", () => {
  it("should create loginStart action", () => {
    const expectedAction = {
      type: actionTypes.LOGIN_START
    };
    expect(actions.loginStart()).toEqual(expectedAction);
  });

  it("should create loginSuccess action", () => {
    const expectedAction = {
      type: actionTypes.LOGIN_SUCCESS,
    };
    expect(actions.loginSuccess()).toEqual(expectedAction);
  });

  it("should create loginFail action", () => {
    const expectedAction = {
      type: actionTypes.LOGIN_FAIL
    };
    expect(actions.loginFail()).toEqual(expectedAction);
  });

  it("should create login (async) action", () => {
    // Async action creator
  });

  it("should create signupStart action", () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_START
    };
    expect(actions.signupStart()).toEqual(expectedAction);
  });

  it("should create signupSuccess action", () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_SUCCESS,
      accessToken: "123",
      userId: "123"
    };
    expect(actions.signupSuccess()).toEqual(expectedAction);
  });

  it("should create signupFail action", () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_FAIL
    };
    expect(actions.signupFail()).toEqual(expectedAction);
  });

  it("should create signup (async) action", () => {
    // Async action creator
  });

  it("should create logout action", () => {
    const expectedAction = {
      type: actionTypes.LOGOUT
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});
