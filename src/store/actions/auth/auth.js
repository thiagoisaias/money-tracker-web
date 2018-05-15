import * as actionTypes from "../actionTypes";
import axios from "axios";
import { push } from "react-router-redux";

export const login = loginData => {
  return dispatch => {
    const { email, password } = loginData;
    dispatch(authStart());
    axios
      .post("/auth/sign_in", { email, password })
      .then(response => {
        const authData = {
          headers: {
            accessToken: response.headers["access-token"],
            client: response.headers["client"],
            expiry: response.headers["expiry"],
            tokenType: response.headers["token-type"],
            uid: response.headers["uid"]
          },
          user: {
            id: response.data.data.id,
            name: response.data.data.name
          }
        };
        dispatch(authSuccess(authData));
        dispatch(push("/"));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.errors));
      });
  };
};

export const signup = signupData => {
  return dispatch => {
    const { name, email, password, passwordConfirmation } = signupData;
    dispatch(authStart());
    axios
      .post("/auth", { name, email, password, passwordConfirmation })
      .then(response => {
        const authData = {
          headers: {
            accessToken: response.headers["access-token"],
            client: response.headers["client"],
            expiry: response.headers["expiry"],
            tokenType: response.headers["token-type"],
            uid: response.headers["uid"]
          },
          user: {
            id: response.data.data.id,
            name: response.data.data.name
          }
        };
        dispatch(authSuccess(authData));
        dispatch(push("/accounts/new"));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.errors));
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
    type: actionTypes.LOGOUT_START
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(logoutStart());
    dispatch(push("/auth"));
  };
};
