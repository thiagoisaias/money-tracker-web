import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import TransactionList from "./TransactionList";

describe("TransactionList", () => {
  const component = shallow(<TransactionList />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
