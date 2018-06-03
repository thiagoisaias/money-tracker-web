import * as actionTypes from "../actionTypes";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

import { setNotification } from "store/actions/notifications/notifications";

/* Create Account */

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

export const createAccount = (accountData, history) => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.id;
    const authHeaders = decamelizeKeys(getState().auth.headers);

    dispatch(createAccountStart());

    axios
      .post(
        `/users/${userId}/accounts`,
        { account: decamelizeKeys(accountData) },
        { headers: authHeaders }
      )
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(createAccountSuccess(parsedData));
        dispatch(
          setNotification({
            type: "SUCCESS",
            message: "Account created."
          })
        );
        history.push("/accounts");
      })
      .catch(error => {
        dispatch(
          setNotification({
            type: "DANGER",
            message: "Account not created."
          })
        );
        dispatch(createAccountFail("Account not created."));
      });
  };
};

/* Fetch Accounts */

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

export const fetchAccounts = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.id;
    const authHeaders = decamelizeKeys(getState().auth.headers);

    dispatch(fetchAccountsStart());

    axios
      .get(`/users/${userId}/accounts`, { headers: authHeaders })
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(fetchAccountsSuccess(parsedData));
      })
      .catch(error => {
        // TODO: Display proper error message
        const customErrorMessage = "Something went wrong.";
        dispatch(fetchAccountsFail(customErrorMessage));
      });
  };
};

/* Update Account */

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

export const updateAccount = (accountData, accountId, history) => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.id;
    const authHeaders = decamelizeKeys(getState().auth.headers);

    dispatch(updateAccountStart());

    axios
      .put(
        `/users/${userId}/accounts/${accountId}`,
        { account: decamelizeKeys(accountData) },
        { headers: authHeaders }
      )
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(updateAccountSuccess(parsedData));
        history.push("/accounts");
      })
      .catch(error => {
        dispatch(
          updateAccountFail("It was not possible to update this account")
        );
      });
  };
};

/* Delete Account */

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

export const deleteAccount = accountId => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.id;
    const authHeaders = decamelizeKeys(getState().auth.headers);

    dispatch(deleteAccountStart());

    axios
      .delete(`/users/${userId}/accounts/${accountId}`, {
        headers: authHeaders
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

/* Other */

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
