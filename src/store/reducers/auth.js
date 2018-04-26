import * as actionTypes from "../actions/actionTypes";

const initialState = {
  accessToken: null,
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
        accessToken: action.accessToken,
        userId: action.user.id,
        userName: action.user.name,
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
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userId: null,
        userName: null,
        accessToken: null
      };
    default:
      return state;
  }
};

export default auth;
