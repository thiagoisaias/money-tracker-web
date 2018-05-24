import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import List from "../List";

describe("Account List", () => {
  const mockProps = {
    accountList: [
      { id: 1, initialBalance: "34534", name: "Lorem One" },
      { id: 2, initialBalance: "94834", name: "Lorem Two" }
    ],
    activeItemId: 1,
    error: null,
    handleActiveItem: jest.fn(),
    isLoading: false
  };
  const component = shallow(<List {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
