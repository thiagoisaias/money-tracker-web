import * as actionTypes from "../actionTypes";
import * as actions from "./auth";

describe("Auth actions", () => {
  const authData = {
    accessToken: "TK123",
    tokenType: "Bearer",
    client: "sds87d3h34g247sd",
    expiry: "12312334",
    uid: "mock@email.com",
    user: {
      id: "1",
      name: "Lorem Foo"
    }
  };
  const error = "Error";

  it("should create authStart action", () => {
    const expectedAction = {
      type: actionTypes.AUTH_START
    };
    expect(actions.authStart()).toEqual(expectedAction);
  });

  it("should create authSuccess action", () => {
    const expectedAction = {
      type: actionTypes.AUTH_SUCCESS,
      authData: authData
    };
    expect(actions.authSuccess(authData)).toEqual(expectedAction);
  });

  it("should create authFail action", () => {
    const expectedAction = {
      type: actionTypes.AUTH_FAIL,
      error: error
    };
    expect(actions.authFail(error)).toEqual(expectedAction);
  });

  xit("should create login (async) action", () => {
    //TODO: Async action
  });

  xit("should create signup (async) action", () => {
    //TODO: Async action
  });

  xit("should create checkAuthStorage action", () => {
    //TODO: Async action
  });

  it("should create logoutStart action", () => {
    const expectedAction = {
      type: actionTypes.LOGOUT
    };
    expect(actions.logoutStart()).toEqual(expectedAction);
  });

  xit("should create logout action", () => {
    //TODO: Async action
  });

  it("should create clearAuthError action", () => {
    const expectedAction = {
      type: actionTypes.CLEAR_AUTH_ERROR
    };
    expect(actions.clearAuthError()).toEqual(expectedAction);
  });
});
