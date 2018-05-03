import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountForm from "./AccountForm";

describe("AccountForm", () => {
  const component = shallow(<AccountForm />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
