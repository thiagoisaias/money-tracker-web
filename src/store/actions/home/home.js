import * as actionTypes from "../actionTypes";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

export const getOverallBalanceStart = () => ({
  type: actionTypes.GET_OVERALL_BALANCE_START
});

export const getOverallBalanceSuccess = data => ({
  type: actionTypes.GET_OVERALL_BALANCE_SUCCESS,
  data
});

export const getOverallBalanceFail = error => ({
  type: actionTypes.GET_OVERALL_BALANCE_FAIL,
  error
});

export const getOverallBalance = () => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(getOverallBalanceStart());

    axios
      .get(`/users/${userId}/overall_balance`, { headers: authHeaders })
      .then(response => {
        const parsedData = camelizeKeys(response.data);

        dispatch(getOverallBalanceSuccess(parsedData));
      })
      .catch(error => {
        console.log(error);
        dispatch(getOverallBalanceFail("Something went wrong."));
      });
  };
};

export const setSelectedDate = selectedDate => ({
  type: actionTypes.SET_SELECTED_DATE,
  selectedDate
});
