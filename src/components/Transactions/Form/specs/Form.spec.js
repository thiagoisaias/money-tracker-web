import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "../Form";

describe("Transaction Form", () => {
  const mockProps = {
    accountOptionList: [
      { value: 1, label: "Account 1" },
      { value: 2, label: "Account 2" }
    ],
    accountListLoading: false,
    categoryOptionList: [
      { value: 1, label: "Food" },
      { value: 2, label: "Home" }
    ],
    categoryListLoading: false,
    checkFormValidity: jest.fn(),
    error: null,
    generateFormData: jest.fn(),
    handleInputChange: jest.fn(),
    isLoading: false,
    match: {},
    onSubmitData: jest.fn(),
    transactionData: {
      id: 1,
      account: {
        id: 1,
        name: "Lorem",
        initialBalance: 3242
      },
      date: "05-29-2018",
      description: "Lorem Ipsum",
      category: {
        id: 1,
        name: "Home",
        color: "salmon"
      },
      value: 324.32,
      transactionType: "expense"
    }
  };
  const component = shallow(<Form {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
