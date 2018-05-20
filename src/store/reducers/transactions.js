import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default transactions;
