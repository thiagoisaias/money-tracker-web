import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  accountToEdit: null,
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
      return {
        ...state,
        accountList: state.accountList.map(item => {
          return item.id === action.accountData.id ? action.accountData : item;
        }),
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
      return {
        ...state,
        accountList: state.accountList.filter(item => {
          return item.id !== action.accountId;
        }),
        error: null,
        isLoading: false
      };
    case actionTypes.DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.SET_ACCOUNT_TO_EDIT:
      return {
        ...state,
        accountToEdit: action.accountData
      };
    case actionTypes.CLEAR_ACCOUNT_TO_EDIT:
      return {
        ...state,
        accountToEdit: null
      }
    default:
      return state;
  }
};

export default accounts;
