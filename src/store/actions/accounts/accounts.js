import * as actionTypes from "../actionTypes";
import axios from "axios";
import { push } from "react-router-redux";
import { decamelizeKeys } from "humps";

export const createAccount = (accountData, userId) => {
  return (dispatch, getState) => {
    dispatch(createAccountStart());
    axios
      .post(
        `/users/${userId}/accounts`,
        { account: decamelizeKeys(accountData) },
        { headers: decamelizeKeys(getState().auth.headers) }
      )
      .then(response => {
        dispatch(createAccountSuccess(response.data));
        dispatch(push("/accounts"));
      })
      .catch(error => {
        // TODO: Display proper error message
        const customErrorMessage = "Something went wrong.";
        dispatch(createAccountFail(customErrorMessage));
      });
  };
};

export const createAccountStart = () => {
  return {
    type: actionTypes.CREATE_ACCOUNT_START
  };
};

export const createAccountSuccess = accountData => {
  return {
    type: actionTypes.CREATE_ACCOUNT_SUCCESS,
    accountData
  };
};

export const createAccountFail = error => {
  return {
    type: actionTypes.CREATE_ACCOUNT_FAIL,
    error
  };
};

export const fetchAccounts = (userId) => {
  return (dispatch, getState) => {
    dispatch(fetchAccountsStart());
    axios
      .get(`/users/${userId}/accounts`, {
        headers: decamelizeKeys(getState().auth.headers)
      })
      .then(response => {
        dispatch(fetchAccountsSuccess(response.data));
      })
      .catch(error => {
        // TODO: Display proper error message
        const customErrorMessage = "Something went wrong.";
        dispatch(fetchAccountsFail(customErrorMessage));
      });
  };
};

export const fetchAccountsStart = () => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_START
  };
};

export const fetchAccountsSuccess = accountList => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
    accountList
  };
};

export const fetchAccountsFail = error => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_FAIL,
    error
  };
};

export const updateAccount = data => {
  return dispatch => {
    dispatch(updateAccountStart());
  };
};

export const updateAccountStart = () => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_START
  };
};

export const updateAccountSuccess = () => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_SUCCESS
  };
};

export const updateAccountFail = error => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_FAIL,
    error
  };
};

export const deleteAccount = data => {
  return dispatch => {
    dispatch(deleteAccountStart());
  };
};

export const deleteAccountStart = () => {
  return {
    type: actionTypes.DELETE_ACCOUNT_START
  };
};

export const deleteAccountSuccess = () => {
  return {
    type: actionTypes.DELETE_ACCOUNT_SUCCESS
  };
};

export const deleteAccountFail = error => {
  return {
    type: actionTypes.DELETE_ACCOUNT_FAIL,
    error
  };
};
