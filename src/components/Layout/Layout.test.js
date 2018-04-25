import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Layout from "./Layout";

describe("Layout", () => {
  const component = shallow(<Layout />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
