import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AccountListContainer } from "./AccountListContainer";

describe("AccountListContainer", () => {
  const mockProps = {
    accountList: [
      { id: "1", initialBalance: "34534", name: "Lorem One" },
      { id: "2", initialBalance: "94834", name: "Lorem Two" }
    ],
    userId: "1",
    error: null,
    isLoading: false,
    onFetchAccountList: jest.fn()
  };
  const component = shallow(<AccountListContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
