import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Item from "../Item";

describe("Transaction Item", () => {
  const mockProps = {
    account: {
      id: 1,
      name: "Lorem",
      initialBalance: 0
    },
    date: "20/04/1994",
    description: "Lorem Ipsum",
    value: 150.0,
    category: {
      id: 1,
      name: "Home",
      color: "#777"
    },
    transactionType: "earning",
    handleActiveItem: jest.fn()
  };

  const component = shallow(<Item {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
