import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountItem from "./AccountItem";

describe("AccountItem", () => {
  const mockProps = {
    accountData: {
      id: 1,
      initialBalance: "94569",
      name: "Mock Account",
    },
    handleActiveItem: jest.fn(),
    handleEdit: jest.fn(),
    isActive: false,
    onDeleteAccount: jest.fn()
  };

  const component = shallow(<AccountItem {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
