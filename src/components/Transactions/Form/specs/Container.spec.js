import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Transaction Form Container", () => {
  const mockProps = {
    accountList: [
      {
        id: 1,
        name: "default",
        initialBalance: "324"
      },
      {
        id: 2,
        name: "default2",
        initialBalance: "224"
      }
    ],
    accountListLoading: false,
    categoryList: [
      {
        id: 1,
        name: "Food",
        color: "blue"
      },
      {
        id: 2,
        name: "Home",
        color: "salmon"
      }
    ],
    categoryListLoading: false,
    transactionToEdit: {
      id: 1,
      account: {
        id: 1,
        name: "default",
        initialBalance: "324"
      },
      category: {
        id: 1,
        name: "Food",
        color: "blue"
      },
      date: "05-28-2018",
      description: "Lorem",
      transactionType: "expense",
      value: "3454"
    },
    error: null,
    history: {},
    isLoading: false,
    match: {},
    onClearTransactionToEdit: jest.fn(),
    onCreateTransaction: jest.fn(),
    onFetchAccounts: jest.fn(),
    onFetchCategories: jest.fn(),
    onUpdateTransaction: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
