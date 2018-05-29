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

    console.log(decamelizeKeys(transactionData));

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

export const fetchTransactionsStart = () => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_START
  };
};

export const fetchTransactionsSuccess = () => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_SUCCESS
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
    // dispatch(fetchTransactionsStart());
  };
};
