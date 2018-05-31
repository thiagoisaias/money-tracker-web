import * as actionTypes from "../actionTypes";
import * as actions from "./users";

describe("Users actions", () => {
  const data = {
    overallBalance: "53453.00"
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
});
