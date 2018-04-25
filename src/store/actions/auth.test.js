import * as actionTypes from "./actionTypes";
import * as actions from "./auth";

describe("Auth actions", () => {
  const authData = {
    accessToken: "UHAD2131-12*(AH",
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
      accessToken: authData.accessToken,
      user: authData.user
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

  it("should create logout action", () => {
    const expectedAction = {
      type: actionTypes.LOGOUT
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});
