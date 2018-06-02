import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  overallBalance: null,
  selectedDate: null
};

const home = (state = initialState, action) => {
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
    case actionTypes.SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.selectedDate
      };
    default:
      return state;
  }
};

export default home;
