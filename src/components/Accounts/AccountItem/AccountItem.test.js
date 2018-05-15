import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountItem from "./AccountItem";

describe("AccountItem", () => {
  const mockProps = {
    id: 1,
    name: "Mock Account",
    initialBalance: "94569",
    isActive: false,
    handleActiveItem: jest.fn(),
    onDeleteAccount: jest.fn()
  };

  const component = shallow(<AccountItem {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
