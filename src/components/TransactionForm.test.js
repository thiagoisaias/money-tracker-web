import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import TransactionForm from "./TransactionForm";

describe("TransactionForm", () => {
  const component = shallow(<TransactionForm />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
