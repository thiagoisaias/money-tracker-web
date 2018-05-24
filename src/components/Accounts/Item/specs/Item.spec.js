import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Item from "../Item";

describe("Account Item", () => {
  const mockProps = {
    accountData: {
      id: 1,
      initialBalance: "94569",
      name: "Mock Account"
    },
    handleActiveItem: jest.fn(),
    handleDelete: jest.fn(),
    handleEdit: jest.fn(),
    isActive: false
  };

  const component = shallow(<Item {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
