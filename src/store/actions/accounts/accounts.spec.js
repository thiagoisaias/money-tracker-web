import * as actionTypes from "../actionTypes";
import * as actions from "./accounts";

describe("Accounts actions", () => {
  const accountData = {
    id: 1,
    name: "Lorem",
    initialBalance: "1.99"
  };
  const accountList = [
    { id: 1, name: "Lorem", initialBalance: "1.99" },
    { id: 2, name: "Lorem 2", initialBalance: "2.99" }
  ];
  const error = "Error";

  it("should create createAccountStart action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_ACCOUNT_START
    };
    expect(actions.createAccountStart()).toEqual(expectedAction);
  });

  it("should create createAccountSuccess action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_ACCOUNT_SUCCESS,
      accountData
    };
    expect(actions.createAccountSuccess(accountData)).toEqual(expectedAction);
  });

  it("should create createAccountFail action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_ACCOUNT_FAIL,
      error: error
    };
    expect(actions.createAccountFail(error)).toEqual(expectedAction);
  });

  xit("should create createAccount (async) action", () => {
    //TODO: Async action
  });

  it("should create fetchAccountsStart action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_ACCOUNTS_START
    };
    expect(actions.fetchAccountsStart()).toEqual(expectedAction);
  });

  it("should create fetchAccountsSuccess action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
      accountList
    };
    expect(actions.fetchAccountsSuccess(accountList)).toEqual(expectedAction);
  });

  it("should create fetchAccountsFail action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_ACCOUNTS_FAIL,
      error: error
    };
    expect(actions.fetchAccountsFail(error)).toEqual(expectedAction);
  });

  xit("should create fetchAccounts (async) action", () => {
    //TODO: Async action
  });

  it("should create updateAccountStart action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_ACCOUNT_START
    };
    expect(actions.updateAccountStart()).toEqual(expectedAction);
  });

  it("should create updateAccountSuccess action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
      accountData
    };
    expect(actions.updateAccountSuccess(accountData)).toEqual(expectedAction);
  });

  it("should create updateAccountFail action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_ACCOUNT_FAIL,
      error: error
    };
    expect(actions.updateAccountFail(error)).toEqual(expectedAction);
  });

  xit("should create updateAccount (async) action", () => {
    //TODO: Async action
  });

  it("should create deleteAccountStart action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_ACCOUNT_START
    };
    expect(actions.deleteAccountStart()).toEqual(expectedAction);
  });

  it("should create deleteAccountSuccess action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_ACCOUNT_SUCCESS
    };
    expect(actions.deleteAccountSuccess()).toEqual(expectedAction);
  });

  it("should create deleteAccountFail action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_ACCOUNT_FAIL,
      error: error
    };
    expect(actions.deleteAccountFail(error)).toEqual(expectedAction);
  });

  xit("should create deleteAccount (async) action", () => {
    //TODO: Async action
  });

  it("should create setAccountToEdit action", () => {
    const expectedAction = {
      type: actionTypes.SET_ACCOUNT_TO_EDIT,
      accountData
    };
    expect(actions.setAccountToEdit(accountData)).toEqual(expectedAction);
  });

  it("should create clearAccountToEdit action", () => {
    const expectedAction = {
      type: actionTypes.CLEAR_ACCOUNT_TO_EDIT
    };
    expect(actions.clearAccountToEdit()).toEqual(expectedAction);
  });

  it("should create clearAccountsError", () => {
    const expectedAction = {
      type: actionTypes.CLEAR_ACCOUNTS_ERROR
    };
    expect(actions.clearAccountsError()).toEqual(expectedAction);
  });
});
