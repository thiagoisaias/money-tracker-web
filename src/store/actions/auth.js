import * as actionTypes from "./actionTypes";
import axios from "axios";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = (data, headers) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    accessToken: headers["access-token"],
    userId: data.data.id,
    userName: data.data.name
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error
  };
};

export const login = loginData => {
  return dispatch => {
    const { email, password } = loginData;
    dispatch(loginStart());
    axios
      .post("/auth/sign_in", { email, password })
      .then(response => {
        dispatch(loginSuccess(response.data, response.headers));
      })
      .catch(error => {
        dispatch(loginFail(error.response.data.errors));
      });
  };
};

export const signupStart = () => {
  return {
    type: actionTypes.SIGNUP_START
  };
};

export const signupSuccess = (data, headers) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    accessToken: headers["access-token"],
    userId: data.data.id,
    userName: data.data.name
  };
};

export const signupFail = error => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    error
  };
};

export const signup = signupData => {
  return dispatch => {
    const { name, email, password, passwordConfirmation } = signupData;
    dispatch(signupStart());
    axios
      .post("/auth", { name, email, password, passwordConfirmation })
      .then(response => {
        dispatch(signupSuccess(response.data, response.headers));
      })
      .catch(error => {
        dispatch(signupFail(error.response.data.errors));
      });
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  };
};
