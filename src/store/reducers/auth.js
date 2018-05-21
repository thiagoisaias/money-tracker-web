import * as actionTypes from "../actions/actionTypes";

const initialState = {
  headers: {
    accessToken: null,
    client: null,
    expiry: null,
    tokenType: null,
    uid: null
  },
  user: {
    id: null,
    name: null
  },
  error: null,
  isAuthenticated: false,
  isLoading: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        headers: {
          ...state.headers
        },
        user: {
          ...state.user
        },
        isLoading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        headers: action.authData.headers,
        user: action.authData.user,
        error: null,
        isAuthenticated: true,
        isLoading: false
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        headers: {
          ...state.headers
        },
        user: {
          ...state.user
        },
        isLoading: false,
        error: action.error
      };
    case actionTypes.LOGOUT_START:
      return {
        ...initialState
      };
    case actionTypes.CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default auth;
