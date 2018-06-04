import * as actionTypes from "../actionTypes";
import axios from "axios";
import { camelizeKeys } from "humps";

export const login = (loginData, history) => {
  return dispatch => {
    const { email, password } = loginData;
    dispatch(authStart());
    axios
      .post("/auth/sign_in", { email, password })
      .then(response => {
        const { accessToken, client, expiry, tokenType, uid } = camelizeKeys(
          response.headers
        );
        const authData = {
          headers: { accessToken, client, expiry, tokenType, uid },
          user: {
            id: response.data.data.id,
            name: response.data.data.name
          }
        };
        dispatch(authSuccess(authData));
        history.push("/");
      })
      .catch(error => {
        const message = error.response.data.errors
          ? error.response.data.errors[0]
          : "Something went wrong.";
        dispatch(authFail(message));
      });
  };
};

export const signUp = (signUpData, history) => {
  return dispatch => {
    const { name, email, password, passwordConfirmation } = signUpData;
    dispatch(authStart());
    axios
      .post("/auth", { name, email, password, passwordConfirmation })
      .then(response => {
        const { accessToken, client, expiry, tokenType, uid } = camelizeKeys(
          response.headers
        );
        const authData = {
          headers: { accessToken, client, expiry, tokenType, uid },
          user: {
            id: response.data.data.id,
            name: response.data.data.name
          }
        };
        dispatch(authSuccess(authData));
        history.push("/");
      })
      .catch(error => {
        console.log(error.response.data);
        const message = error.response.data.errors.full_messages
          ? error.response.data.errors.full_messages[0]
          : "Something went wrong.";
        dispatch(authFail(message));
      });
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
};

export const authFail = authError => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: authError
  };
};

export const logoutStart = () => {
  return {
    type: actionTypes.LOGOUT
  };
};

export const logout = history => {
  return dispatch => {
    dispatch(logoutStart());
    history.push("/auth");
  };
};

export const clearAuthError = () => {
  return {
    type: actionTypes.CLEAR_AUTH_ERROR
  };
};
