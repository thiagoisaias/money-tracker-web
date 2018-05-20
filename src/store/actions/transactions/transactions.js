import * as actionTypes from "../actionTypes";
import axios from "axios";

export const fetchTransactions = loginData => {
  return dispatch => {
    const { email, password } = loginData;
  };
};

export const fetchTransactionsSuccess = () => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_SUCCESS
  };
};

export const fetchTransactionsFail = (error) => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_FAIL,
    error
  };
};

export const fetchTransactionsStart = () => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_START
  };
};
