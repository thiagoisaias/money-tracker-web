import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./Button";

describe("Button", () => {
  const component = shallow(<Button />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
