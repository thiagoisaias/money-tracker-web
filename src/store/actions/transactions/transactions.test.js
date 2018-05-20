import * as actionTypes from "../actionTypes";
import * as actions from "./transactions";

describe("Transaction actions", () => {
  const transactionData = {};
  const error = "Error";

  it("should create fetchTransactionsStart action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_TRANSACTIONS_START
    };
    expect(actions.fetchTransactionsStart()).toEqual(expectedAction);
  });

  it("should create fetchTransactionsSuccess action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_TRANSACTIONS_SUCCESS
    };
    expect(actions.fetchTransactionsSuccess()).toEqual(expectedAction);
  });

  it("should create fetchTransactionsFail action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_TRANSACTIONS_FAIL,
      error: error
    };
    expect(actions.fetchTransactionsFail(error)).toEqual(expectedAction);
  });

  xit("should create fetchTransactions (async) action", () => {
    //TODO: Async action
  });

});
