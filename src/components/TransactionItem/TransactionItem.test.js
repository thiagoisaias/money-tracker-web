import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import TransactionItem from "./TransactionItem";

describe("TransactionItem", () => {
  const mockProps = {
    date: "20/04/1994",
    description: "Lorem Ipsum",
    category: {
      name: "Home",
      color: "#777"
    },
    transaction_type: "earning"
  };

  const component = shallow(<TransactionItem {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
