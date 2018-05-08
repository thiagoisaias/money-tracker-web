import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AccountList } from "./AccountList";

describe("AccountList", () => {
  const mockProps = {
    accountList: [
      { id: 1, initial_balance: "34534", name: "Lorem One" },
      { id: 2, initial_balance: "94834", name: "Lorem Two" }
    ],
    userId: "UIA812",
    error: null,
    isLoading: false,
    onFetchAccountList: jest.fn(),
    handleActiveItem: jest.fn(),
    activeItemId: 1
  };
  const component = shallow(<AccountList {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
