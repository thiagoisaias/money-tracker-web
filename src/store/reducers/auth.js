import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userId: null,
  userName: null,
  accessToken: null,
  error: null,
  isLoading: false,
  isAuthenticated: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        error: null,
        userId: action.userId,
        userName: action.userName,
        accessToken: action.accessToken,
      };
    case actionTypes.SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case actionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        error: null,
        userId: action.userId,
        userName: action.userName,
        accessToken: action.accessToken
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userId: null,
        accessToken: null
      };
    default:
      return state;
  }
};

export default auth;
