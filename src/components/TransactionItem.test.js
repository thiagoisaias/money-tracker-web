import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import TransactionItem from "./TransactionItem";

describe("TransactionItem", () => {
  const component = shallow(<TransactionItem />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
