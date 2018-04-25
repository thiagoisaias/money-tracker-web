import * as actionTypes from "./actionTypes";
import axios from "axios";

export const login = loginData => {
  return dispatch => {
    const { email, password } = loginData;
    dispatch(authStart());
    axios
      .post("/auth/sign_in", { email, password })
      .then(response => {
        localStorage.setItem("accessToken", response.headers["access-token"]);
        localStorage.setItem("userId", response.data.data.id);
        localStorage.setItem("userName", response.data.data.name);
        const authData = {
          accessToken: response.headers["access-token"],
          user: response.data.data
        };
        dispatch(authSuccess(authData));
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
        localStorage.setItem("accessToken", response.headers["access-token"]);
        localStorage.setItem("userId", response.data.data.id);
        localStorage.setItem("userName", response.data.data.name);
        const authData = {
          accessToken: response.headers["access-token"],
          user: response.data.data
        };
        dispatch(authSuccess(authData));
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
    accessToken: authData.accessToken,
    user: authData.user
  };
};

export const authFail = authError => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: authError
  };
};

export const checkAuthStorage = () => {
  return dispatch => {
    const accessToken = localStorage.getItem("accessToken");
    const user = {
      id: localStorage.getItem("userId"),
      name: localStorage.getItem("userName")
    };
    const authData = { accessToken, user };
    if (!accessToken) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(authData));
    }
  };
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  return {
    type: actionTypes.LOGOUT
  };
};
