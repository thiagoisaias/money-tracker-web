import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  accountList: []
};

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ACCOUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        accountList: [...state.accountList, action.accountData]
      };
    case actionTypes.CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.FETCH_ACCOUNTS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        accountList: action.accountList
      };
    case actionTypes.FETCH_ACCOUNTS_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.UPDATE_ACCOUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.UPDATE_ACCOUNT_SUCCESS:
      // TODO: depends on the account ID
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case actionTypes.UPDATE_ACCOUNT_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.DELETE_ACCOUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.DELETE_ACCOUNT_SUCCESS:
      // TODO: depends on the account ID
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case actionTypes.DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default accounts;
