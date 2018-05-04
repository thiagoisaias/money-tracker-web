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
        localStorage.setItem("tokenType", response.headers["token-type"]);
        localStorage.setItem("client", response.headers["client"]);
        localStorage.setItem("expiry", response.headers["expiry"]);
        localStorage.setItem("uid", response.headers["uid"]);
        localStorage.setItem("userId", response.data.data.id);
        localStorage.setItem("userName", response.data.data.name);
        const authData = {
          accessToken: response.headers["access-token"],
          tokenType: response.headers["token-type"],
          client: response.headers["client"],
          expiry: response.headers["expiry"],
          uid: response.headers["uid"],
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
        localStorage.setItem("tokenType", response.headers["token-type"]);
        localStorage.setItem("client", response.headers["client"]);
        localStorage.setItem("expiry", response.headers["expiry"]);
        localStorage.setItem("uid", response.headers["uid"]);
        localStorage.setItem("userId", response.data.data.id);
        localStorage.setItem("userName", response.data.data.name);
        const authData = {
          accessToken: response.headers["access-token"],
          tokenType: response.headers["token-type"],
          client: response.headers["client"],
          expiry: response.headers["expiry"],
          uid: response.headers["uid"],
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
    authData
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
    const tokenType = localStorage.getItem("tokenType");
    const client = localStorage.getItem("client");
    const expiry = localStorage.getItem("expiry");
    const uid = localStorage.getItem("uid");

    const user = {
      id: localStorage.getItem("userId"),
      name: localStorage.getItem("userName")
    };
    const authData = { accessToken, tokenType, client, expiry, uid, user };
    if (!accessToken) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(authData));
    }
  };
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("tokenType");
  localStorage.removeItem("client");
  localStorage.removeItem("expiry");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  return {
    type: actionTypes.LOGOUT
  };
};
