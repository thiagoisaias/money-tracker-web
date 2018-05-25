import * as actionTypes from "../actionTypes";
// import axios from "axios";

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
    dispatch(fetchTransactionsStart());
  };
};
