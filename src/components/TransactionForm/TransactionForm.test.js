import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import TransactionForm from "./TransactionForm";

describe("TransactionForm", () => {
  const component = shallow(<TransactionForm />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
