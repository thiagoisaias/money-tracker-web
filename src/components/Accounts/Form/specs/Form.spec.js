import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "../Form";

describe("Account Form", () => {
  const mockProps = {
    accountToEdit: {
      id: 1,
      name: "Lorem",
      initialBalance: "32423.43"
    },
    error: null,
    isLoading: false,
    match: { path: "/path" },
    onSubmitData: jest.fn()
  };
  const component = shallow(<Form {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
