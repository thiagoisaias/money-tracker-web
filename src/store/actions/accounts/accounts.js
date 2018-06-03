import * as actionTypes from "../actionTypes";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

import { displayNotification } from "store/actions/notifications/notifications";

/* Create Account */

export const createAccountStart = () => ({
  type: actionTypes.CREATE_ACCOUNT_START
});

export const createAccountSuccess = accountData => ({
  type: actionTypes.CREATE_ACCOUNT_SUCCESS,
  accountData
});

export const createAccountFail = error => ({
  type: actionTypes.CREATE_ACCOUNT_FAIL,
  error
});

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
        history.push("/accounts");
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Account created."
          })
        );
      })
      .catch(error => {
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Account not created."
          })
        );
        dispatch(createAccountFail("Something went wrong."));
      });
  };
};

/* Fetch Accounts */

export const fetchAccountsStart = () => ({
  type: actionTypes.FETCH_ACCOUNTS_START
});

export const fetchAccountsSuccess = accountList => ({
  type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
  accountList
});

export const fetchAccountsFail = error => ({
  type: actionTypes.FETCH_ACCOUNTS_FAIL,
  error
});

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

export const updateAccountStart = () => ({
  type: actionTypes.UPDATE_ACCOUNT_START
});

export const updateAccountSuccess = accountData => ({
  type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
  accountData
});

export const updateAccountFail = error => ({
  type: actionTypes.UPDATE_ACCOUNT_FAIL,
  error
});

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
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Account updated."
          })
        );
      })
      .catch(error => {
        dispatch(updateAccountFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Account not updated."
          })
        );
      });
  };
};

/* Delete Account */

export const deleteAccountStart = () => ({
  type: actionTypes.DELETE_ACCOUNT_START
});

export const deleteAccountSuccess = accountId => ({
  type: actionTypes.DELETE_ACCOUNT_SUCCESS,
  accountId
});

export const deleteAccountFail = error => ({
  type: actionTypes.DELETE_ACCOUNT_FAIL,
  error
});

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
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Account deleted."
          })
        );
      })
      .catch(error => {
        dispatch(deleteAccountFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Account not deleted."
          })
        );
      });
  };
};

/* Other */

export const setAccountToEdit = accountData => ({
  type: actionTypes.SET_ACCOUNT_TO_EDIT,
  accountData
});

export const clearAccountToEdit = () => ({
  type: actionTypes.CLEAR_ACCOUNT_TO_EDIT
});

export const clearAccountsError = () => ({
  type: actionTypes.CLEAR_ACCOUNTS_ERROR
});
