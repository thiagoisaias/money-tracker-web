import * as actionTypes from "../actionTypes";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";
import moment from "moment";

import { displayNotification } from "store/actions/notifications/notifications";

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

    axios
      .post(
        `/users/${userId}/accounts/${accountId}/transactions`,
        { transaction: decamelizeKeys(transactionData) },
        { headers: authHeaders }
      )
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(createTransactionSuccess(parsedData));
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Transaction created."
          })
        );
      })
      .catch(error => {
        dispatch(createTransactionFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Transaction not created"
          })
        );
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

export const fetchTransactionsByDate = selectedDate => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    const momentDate = moment(selectedDate, "MMMM of YYYY");
    // Moment month starts at 0
    const month = momentDate.month() + 1;
    const year = momentDate.year();

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
        console.log(error.response.data);
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

    axios
      .put(
        `/users/${userId}/accounts/${accountId}/transactions/${transactionId}`,
        { transaction: decamelizeKeys(transactionData) },
        { headers: authHeaders }
      )
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(updateTransactionSuccess(parsedData));
        history.push("/");
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Transaction updated."
          })
        );
      })
      .catch(error => {
        dispatch(updateTransactionFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Transaction not updated."
          })
        );
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
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Transaction deleted."
          })
        );
      })
      .catch(error => {
        dispatch(deleteTransactionFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Transaction not deleted"
          })
        );
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

export const clearTransactionsError = () => ({
  type: actionTypes.CLEAR_TRANSACTIONS_ERROR
});
