import * as actionTypes from "../actionTypes";
import * as actions from "./home";

describe("Home actions", () => {
  const data = {
    overallBalance: "53453.00",
    selectedDate: "2018-05-31",
    transactionList: []
  };
  const error = "Something went wrong";

  it("should create getOverallBalanceStart action", () => {
    const expectedAction = {
      type: actionTypes.GET_OVERALL_BALANCE_START
    };
    expect(actions.getOverallBalanceStart()).toEqual(expectedAction);
  });

  it("should create getOverallBalanceSuccess action", () => {
    const expectedAction = {
      type: actionTypes.GET_OVERALL_BALANCE_SUCCESS,
      data
    };
    expect(actions.getOverallBalanceSuccess(data)).toEqual(expectedAction);
  });

  it("should create getOverallBalanceFail action", () => {
    const expectedAction = {
      type: actionTypes.GET_OVERALL_BALANCE_FAIL,
      error
    };
    expect(actions.getOverallBalanceFail(error)).toEqual(expectedAction);
  });

  xit("should create getOverallBalance action", () => {
    // Async
  });

  it("should create setSelectedDate action", () => {
    const expectedAction = {
      type: actionTypes.SET_SELECTED_DATE,
      selectedDate: data.selectedDate
    };
    expect(actions.setSelectedDate(data.selectedDate)).toEqual(expectedAction);
  });
});
