import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountItem from "./AccountItem";

describe("AccountItem", () => {
  const mockProps = {
    id: "#UA12",
    name: "Mock Account",
    initialBalance: 999,
    currentBalance: 500.32,
    isActive: false,
    handleActiveItem: jest.fn()
  };

  const component = shallow(<AccountItem {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
