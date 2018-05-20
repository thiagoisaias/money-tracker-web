import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import withFormInputHandler from "./withFormInputHandler"

describe("withFormInputHandler", () => {
  const component = shallow(<withFormInputHandler />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
