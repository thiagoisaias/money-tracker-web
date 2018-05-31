import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  transactionList: [],
  transactionToEdit: null
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TRANSACTION_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        transactionList: [
          ...state.transactionList,
          {
            ...action.transactionData,
            account: { ...action.transactionData.account },
            category: { ...action.transactionData.category }
          }
        ]
      };
    case actionTypes.CREATE_TRANSACTION_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.FETCH_TRANSACTIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case actionTypes.FETCH_TRANSACTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case actionTypes.UPDATE_TRANSACTION_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        transactionList: state.transactionList.map(item => {
          return item.id === action.transactionData.id
            ? {
                ...action.transactionData,
                account: { ...action.transactionData.account },
                category: { ...action.transactionData.category }
              }
            : item;
        })
      };
    case actionTypes.UPDATE_TRANSACTION_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.DELETE_TRANSACTION_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        transactionList: state.transactionList.filter(item => {
          return item.id !== action.transactionId;
        })
      };
    case actionTypes.DELETE_TRANSACTION_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.SET_TRANSACTION_TO_EDIT:
      return {
        ...state,
        transactionToEdit: { ...action.transactionToEdit }
      };
    case actionTypes.CLEAR_TRANSACTION_TO_EDIT:
      return {
        ...state,
        transactionToEdit: null
      };
    default:
      return state;
  }
};

export default transactions;
