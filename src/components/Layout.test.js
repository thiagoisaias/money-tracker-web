import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Layout from "./Layout";

describe("Layout", () => {
  const component = shallow(<Layout />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
