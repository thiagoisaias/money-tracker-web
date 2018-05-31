import * as actionTypes from "../actionTypes";
import * as actions from "./transactions";

describe("Transactions actions", () => {
  const transactionData = {
    id: 1
  };
  const transactionToEdit = {
    id: 1
  }
  const transactionList = [
    {
      id: 1,
      account: {
        id: 1,
        name: "Lorem",
        initialBalance: 0
      },
      date: "2018-04-22",
      description: "Uber",
      value: 150.67,
      category: {
        id: 1,
        name: "Transport",
        color: "#DDD"
      },
      transactionType: "expense"
    },
    {
      id: 2,
      account: {
        id: 2,
        name: "Lorem",
        initialBalance: 0
      },
      date: "2018-04-23",
      description: "Lorem Ipsum Dolor Transaction Mousepad Monitor",
      value: 200.43,
      category: {
        id: 2,
        name: "Salary",
        color: "lightblue"
      },
      transactionType: "earning"
    }
  ];
  const error = "Something went wrong.";

  it("should create createTransactionStart action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_TRANSACTION_START
    };
    expect(actions.createTransactionStart()).toEqual(expectedAction);
  });

  it("should create createTransactionSuccess action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_TRANSACTION_SUCCESS,
      transactionData
    };
    expect(actions.createTransactionSuccess(transactionData)).toEqual(
      expectedAction
    );
  });

  it("should create createTransactionFail action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_TRANSACTION_FAIL,
      error
    };
    expect(actions.createTransactionFail(error)).toEqual(expectedAction);
  });

  xit("should create createTransaction (async) action", () => {
    //TODO: Async action
  });

  it("should create fetchTransactionsStart action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_TRANSACTIONS_START
    };
    expect(actions.fetchTransactionsStart()).toEqual(expectedAction);
  });

  it("should create fetchTransactionsSuccess action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
      transactionList
    };
    expect(actions.fetchTransactionsSuccess(transactionList)).toEqual(
      expectedAction
    );
  });

  it("should create fetchTransactionsFail action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_TRANSACTIONS_FAIL,
      error
    };
    expect(actions.fetchTransactionsFail(error)).toEqual(expectedAction);
  });

  xit("should create fetchTransactions (async) action", () => {
    //TODO: Async action
  });

  it("should create updateTransactionStart action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_TRANSACTION_START
    };
    expect(actions.updateTransactionStart()).toEqual(expectedAction);
  });

  it("should create updateTransactionSuccess action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_TRANSACTION_SUCCESS,
      transactionData
    };
    expect(actions.updateTransactionSuccess(transactionData)).toEqual(
      expectedAction
    );
  });

  it("should create updateTransactionFail action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_TRANSACTION_FAIL,
      error
    };
    expect(actions.updateTransactionFail(error)).toEqual(expectedAction);
  });

  xit("should create updateTransaction (async) action", () => {
    //TODO: Async action
  });

  it("should create deleteTransactionStart action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_TRANSACTION_START
    };
    expect(actions.deleteTransactionStart()).toEqual(expectedAction);
  });

  it("should create deleteTransactionSuccess action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_TRANSACTION_SUCCESS,
      transactionId: transactionData.id
    };
    expect(actions.deleteTransactionSuccess(transactionData.id)).toEqual(
      expectedAction
    );
  });

  it("should create deleteTransactionFail action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_TRANSACTION_FAIL,
      error
    };
    expect(actions.deleteTransactionFail(error)).toEqual(expectedAction);
  });

  xit("should create deleteTransaction (async) action", () => {
    //TODO: Async action
  });

  it("should create setTransactionToEdit action", () => {
    const expectedAction = {
      type: actionTypes.SET_TRANSACTION_TO_EDIT,
      transactionToEdit
    };
    expect(actions.setTransactionToEdit(transactionToEdit)).toEqual(
      expectedAction
    );
  });

  it("should create clearAccountToEdit action", () => {
    const expectedAction = {
      type: actionTypes.CLEAR_TRANSACTION_TO_EDIT
    };
    expect(actions.clearTransactionToEdit()).toEqual(expectedAction);
  });
});
