import * as actionTypes from "../actionTypes";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

/* Create Transaction */

export const createTransactionStart = () => ({
  type: actionTypes.CREATE_TRANSACTION_START
});

export const createTransactionSuccess = transactionData => ({
  type: actionTypes.CREATE_TRANSACTION_SUCCESS,
  transactionData
});

export const createTransactionFail = error => ({
  type: actionTypes.CREATE_TRANSACTION_FAIL,
  error
});

export const createTransaction = (transactionData, accountId) => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(createTransactionStart());
    console.log("Create sent data", decamelizeKeys(transactionData));

    axios
      .post(
        `/users/${userId}/accounts/${accountId}/transactions`,
        { transaction: decamelizeKeys(transactionData) },
        { headers: authHeaders }
      )
      .then(response => {
        console.log("Create transaction success", response.data);
        const parsedData = camelizeKeys(response.data);
        dispatch(createTransactionSuccess(parsedData));
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(createTransactionFail("Something went wrong."));
      });
  };
};

/* Fetch transactions */

export const fetchTransactionsByDateStart = () => ({
  type: actionTypes.FETCH_TRANSACTIONS_BY_DATE_START
});

export const fetchTransactionsByDateSuccess = transactionList => ({
  type: actionTypes.FETCH_TRANSACTIONS_BY_DATE_SUCCESS,
  transactionList
});

export const fetchTransactionsByDateFail = error => ({
  type: actionTypes.FETCH_TRANSACTIONS_BY_DATE_FAIL,
  error
});

export const fetchTransactionsByDate = (month, year) => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(fetchTransactionsByDateStart());

    axios
      .get(
        `/users/${userId}/fetch_transactions_by_date?month=${month}&year=${year}`,
        {
          headers: authHeaders
        }
      )
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(fetchTransactionsByDateSuccess(parsedData));
      })
      .catch(error => {
        console.log(error.response && error.response.data);
        dispatch(fetchTransactionsByDateFail("Something went wrong."));
      });
  };
};

/* Update transaction */

export const updateTransactionStart = () => ({
  type: actionTypes.UPDATE_TRANSACTION_START
});

export const updateTransactionSuccess = transactionData => ({
  type: actionTypes.UPDATE_TRANSACTION_SUCCESS,
  transactionData
});

export const updateTransactionFail = error => ({
  type: actionTypes.UPDATE_TRANSACTION_FAIL,
  error
});

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
    console.log("Update sent data", decamelizeKeys(transactionData));

    axios
      .put(
        `/users/${userId}/accounts/${accountId}/transactions/${transactionId}`,
        { transaction: decamelizeKeys(transactionData) },
        { headers: authHeaders }
      )
      .then(response => {
        console.log("Update transaction success", response.data);
        const parsedData = camelizeKeys(response.data);
        dispatch(updateTransactionSuccess(parsedData));
        // history.push("/");
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(updateTransactionFail("Something went wrong."));
      });
  };
};

/* Delete transaction */

export const deleteTransactionStart = () => ({
  type: actionTypes.DELETE_TRANSACTION_START
});

export const deleteTransactionSuccess = transactionId => ({
  type: actionTypes.DELETE_TRANSACTION_SUCCESS,
  transactionId
});

export const deleteTransactionFail = error => ({
  type: actionTypes.DELETE_TRANSACTION_FAIL,
  error
});

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

export const setTransactionToEdit = transactionToEdit => ({
  type: actionTypes.SET_TRANSACTION_TO_EDIT,
  transactionToEdit
});

export const clearTransactionToEdit = () => ({
  type: actionTypes.CLEAR_TRANSACTION_TO_EDIT
});
