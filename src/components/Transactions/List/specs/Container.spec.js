import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Transaction List Container", () => {
  const mockProps = {
    activeItemId: 1,
    error: null,
    isLoading: false,
    handleActiveItem: jest.fn(),
    onFetchTransactionList: jest.fn(),
    selectedDate: {},
    transactionList: [
      {
        id: 1,
        account: {
          id: 1,
          name: "Lorem",
          initialBalance: 0
        },
        date: "2018-04-22",
        description: "Uber",
        value: 150.67,
        category: {
          id: 1,
          name: "Transport",
          color: "#DDD"
        },
        transactionType: "expense"
      },
      {
        id: 2,
        account: {
          id: 2,
          name: "Lorem",
          initialBalance: 0
        },
        date: "2018-04-23",
        description: "Lorem Ipsum Dolor Transaction Mousepad Monitor",
        value: 200.43,
        category: {
          id: 2,
          name: "Salary",
          color: "lightblue"
        },
        transactionType: "earning"
      }
    ]
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
