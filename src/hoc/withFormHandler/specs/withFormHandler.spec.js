import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import withFormHandler from "../withFormHandler"

describe("withFormHandler", () => {
  const component = shallow(<withFormHandler />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
