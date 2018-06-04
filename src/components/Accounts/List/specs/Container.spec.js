import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Account List Container", () => {
  const mockProps = {
    accountList: [
      { id: 1, initialBalance: "34534", name: "Lorem One" },
      { id: 2, initialBalance: "94834", name: "Lorem Two" }
    ],
    clearAccountsError: jest.fn(),
    error: null,
    isLoading: false,
    fetchAccounts: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
