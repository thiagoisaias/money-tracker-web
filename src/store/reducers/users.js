import * as actionTypes from "../actions/actionTypes";

const initialState = {
  overallBalance: null,
  isLoading: false,
  error: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_OVERALL_BALANCE_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_OVERALL_BALANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        overallBalance: action.data.overallBalance
      };
    case actionTypes.GET_OVERALL_BALANCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default auth;
