import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountList from "./AccountList";

describe("AccountList", () => {
  const mockProps = {
    accountList: [
      { id: 1, initialBalance: "34534", name: "Lorem One" },
      { id: 2, initialBalance: "94834", name: "Lorem Two" }
    ],
    error: null,
    isLoading: false,
    handleActiveItem: jest.fn(),
    activeItemId: 1
  };
  const component = shallow(<AccountList {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
