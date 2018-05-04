import * as actionTypes from "../actionTypes";
import axios from "axios";

export const createAccount = (accountData, userId, authHeaders) => {
  return dispatch => {
    dispatch(createAccountStart());
    axios
      .post(
        `/users/${userId}/accounts`,
        { account: accountData },
        {
          headers: {
            "access-token": authHeaders.accessToken,
            client: authHeaders.client,
            expiry: authHeaders.expiry,
            "token-type": authHeaders.tokenType,
            uid: authHeaders.uid
          }
        }
      )
      .then(response => {
        console.log("RESPONSE", response.data);
        dispatch(createAccountSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
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

export const fetchAccounts = data => {
  return dispatch => {
    dispatch(fetchAccountsStart());
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
