import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { TransactionListContainer } from "./TransactionListContainer";

describe("TransactionListContainer", () => {
  const mockProps = {
    transactionList: []
  };
  const component = shallow(
    <TransactionListContainer
      selectedDate={"Wed May 23 2018 13:07:19 GMT-0300 (-03)"}
      {...mockProps}
    />
  );

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
