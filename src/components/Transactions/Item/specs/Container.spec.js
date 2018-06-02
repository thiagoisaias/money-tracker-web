import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Transaction Item Container", () => {
  const mockProps = {
    transactionData: {
      id: 1,
      account: {
        id: 1,
        name: "Lorem",
        initialBalance: "3242"
      },
      date: "05-29-2018",
      description: "Lorem Ipsum",
      category: {
        id: 1,
        name: "Home",
        color: "salmon"
      },
      value: "324.32",
      transactionType: "expense"
    },
    handleActiveItem: jest.fn(),
    isActive: false,
    isLoading: false,
    onDeleteTransaction: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
