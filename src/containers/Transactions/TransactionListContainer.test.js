import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { TransactionListContainer } from "./TransactionListContainer";

describe("TransactionListContainer", () => {
  const mockProps = {
  };
  const component = shallow(<TransactionListContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
