import * as actionTypes from "../actionTypes";
import axios from "axios";
import { decamelizeKeys } from "humps";

export const createAccount = (accountData, userId, history) => {
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
        history.push("/accounts");
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

export const fetchAccounts = userId => {
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

export const updateAccount = (accountData, accountId, history) => {
  return (dispatch, getState) => {
    dispatch(updateAccountStart());
    console.log("sent accountData", accountData);
    axios
      .put(
        `/accounts/${accountId}`,
        { account: decamelizeKeys(accountData) },
        { headers: decamelizeKeys(getState().auth.headers) }
      )
      .then(response => {
        dispatch(updateAccountSuccess(response.data));
        history.push("/accounts");
      })
      .catch(error => {
        dispatch(
          updateAccountFail("It was not possible to update this account")
        );
      });
  };
};

export const updateAccountStart = () => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_START
  };
};

export const updateAccountSuccess = accountData => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
    accountData
  };
};

export const updateAccountFail = error => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_FAIL,
    error
  };
};

export const deleteAccount = accountId => {
  return (dispatch, getState) => {
    dispatch(deleteAccountStart());
    axios
      .delete(`/accounts/${accountId}`, {
        headers: decamelizeKeys(getState().auth.headers)
      })
      .then(response => {
        dispatch(deleteAccountSuccess(accountId));
      })
      .catch(error => {
        // TODO: Display proper error message
        const customErrorMessage = "Something went wrong.";
        dispatch(deleteAccountFail(customErrorMessage));
      });
  };
};

export const deleteAccountStart = () => {
  return {
    type: actionTypes.DELETE_ACCOUNT_START
  };
};

export const deleteAccountSuccess = accountId => {
  return {
    type: actionTypes.DELETE_ACCOUNT_SUCCESS,
    accountId
  };
};

export const deleteAccountFail = error => {
  return {
    type: actionTypes.DELETE_ACCOUNT_FAIL,
    error
  };
};

export const setAccountToEdit = accountData => {
  return {
    type: actionTypes.SET_ACCOUNT_TO_EDIT,
    accountData
  };
};

export const clearAccountToEdit = () => {
  return {
    type: actionTypes.CLEAR_ACCOUNT_TO_EDIT
  };
};
