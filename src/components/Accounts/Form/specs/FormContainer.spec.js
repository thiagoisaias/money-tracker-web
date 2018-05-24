import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { FormContainer } from "../FormContainer";

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
    onClearAccountToEdit: jest.fn(),
    onCreateAccount: jest.fn(),
    onUpdateAccount: jest.fn(),
    onSetAccountToEdit: jest.fn()
  };
  const component = shallow(<FormContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
