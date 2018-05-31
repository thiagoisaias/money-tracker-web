import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Item from "../Item";

describe("Transaction Item", () => {
  const mockProps = {
    transactionData: {
      id: 1,
      account: {
        id: 1,
        name: "Lorem",
        initialBalance: 3242
      },
      date: "2018-05-29",
      description: "Lorem Ipsum",
      category: {
        id: 1,
        name: "Home",
        color: "salmon"
      },
      value: 324.32,
      transactionType: "expense"
    },
    handleActiveItem: jest.fn(),
    handleEdit: jest.fn(),
    handleDelete: jest.fn()
  };

  const component = shallow(<Item {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
