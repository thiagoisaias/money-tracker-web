import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Account Container", () => {
  const mockProps = {
    accountToEdit: {
      id: 1,
      name: "Lorem",
      initialBalance: "25345.00"
    },
    error: null,
    history: {},
    isLoading: false,
    match: {},
    clearAccountToEdit: jest.fn(),
    createAccount: jest.fn(),
    updateAccount: jest.fn(),
    setAccountToEdit: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
