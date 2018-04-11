import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import TransactionItem from "./TransactionItem";

describe("TransactionItem", () => {
  const component = shallow(<TransactionItem />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
