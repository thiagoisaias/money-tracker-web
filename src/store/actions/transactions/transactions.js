import * as actionTypes from "../actionTypes";
import axios from "axios";
import { decamelizeKeys } from "humps";

/* Create Transaction */

export const createTransactionStart = () => {
  return {
    type: actionTypes.CREATE_TRANSACTION_START
  };
};

export const createTransactionSuccess = transactionData => {
  return {
    type: actionTypes.CREATE_TRANSACTION_SUCCESS,
    transactionData
  };
};

export const createTransactionFail = error => {
  return {
    type: actionTypes.CREATE_TRANSACTION_FAIL,
    error
  };
};

export const createTransaction = (transactionData, accountId) => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(createTransactionStart());

    axios
      .post(
        `/users/${userId}/accounts/${accountId}/transactions`,
        { transaction: decamelizeKeys(transactionData) },
        { headers: authHeaders }
      )
      .then(response => {
        dispatch(createTransactionSuccess(response.data));
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(createTransactionFail("Something went wrong."));
      });
  };
};

/* Fetch transactions */

export const fetchTransactionsStart = () => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_START
  };
};

export const fetchTransactionsSuccess = transactionList => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
    transactionList
  };
};

export const fetchTransactionsFail = error => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_FAIL,
    error
  };
};

export const fetchTransactions = () => {
  return (dispatch, getState) => {
    dispatch(fetchTransactionsStart());
    dispatch(fetchTransactionsSuccess(getState().transactions.transactionList));
  };
};

/* Update transaction */

export const updateTransactionStart = () => {
  return {
    type: actionTypes.UPDATE_TRANSACTION_START
  };
};

export const updateTransactionSuccess = transactionData => {
  return {
    type: actionTypes.UPDATE_TRANSACTION_SUCCESS,
    transactionData
  };
};

export const updateTransactionFail = error => {
  return {
    type: actionTypes.UPDATE_TRANSACTION_FAIL,
    error
  };
};

export const updateTransaction = (
  transactionData,
  transactionId,
  accountId,
  history
) => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(updateTransactionStart());

    axios
      .put(
        `/users/${userId}/accounts/${accountId}/transactions/${transactionId}`,
        { transaction: decamelizeKeys(transactionData) },
        { headers: authHeaders }
      )
      .then(response => {
        dispatch(updateTransactionSuccess(response.data));
        history.push("/");
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(updateTransactionFail("Something went wrong."));
      });
  };
};

/* Delete transaction */

export const deleteTransactionStart = () => {
  return {
    type: actionTypes.DELETE_TRANSACTION_START
  };
};

export const deleteTransactionSuccess = transactionId => {
  return {
    type: actionTypes.DELETE_TRANSACTION_SUCCESS,
    transactionId
  };
};

export const deleteTransactionFail = error => {
  return {
    type: actionTypes.DELETE_TRANSACTION_FAIL,
    error
  };
};

export const deleteTransaction = (transactionId, accountId) => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(deleteTransactionStart());

    axios
      .delete(
        `/users/${userId}/accounts/${accountId}/transactions/${transactionId}`,
        { headers: authHeaders }
      )
      .then(response => {
        dispatch(deleteTransactionSuccess(transactionId));
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(deleteTransactionFail("Something went wrong."));
      });
  };
};

/* Other */

export const setTransactionToEdit = transactionToEdit => {
  return {
    type: actionTypes.SET_TRANSACTION_TO_EDIT,
    transactionToEdit
  };
};

export const clearTransactionToEdit = () => {
  return {
    type: actionTypes.CLEAR_TRANSACTION_TO_EDIT
  };
};
