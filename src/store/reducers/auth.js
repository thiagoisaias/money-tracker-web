import * as actionTypes from "../actions/actionTypes";

const initialState = {
  accessToken: null,
  client: null,
  expiry: null,
  tokenType: null,
  uid: null,
  userId: null,
  userName: null,
  error: null,
  isAuthenticated: false,
  isLoading: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        accessToken: action.authData.accessToken,
        client: action.authData.client,
        expiry: action.authData.expiry,
        tokenType: action.authData.tokenType,
        uid: action.authData.uid,
        userId: action.authData.user.id,
        userName: action.authData.user.name,
        error: null,
        isAuthenticated: true,
        isLoading: false
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case actionTypes.LOGOUT_START:
      return {
        ...state,
        isAuthenticated: false,
        userId: null,
        userName: null,
        accessToken: null,
        tokenType: null,
        client: null,
        expiry: null
      };
    default:
      return state;
  }
};

export default auth;
