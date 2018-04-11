import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  const component = shallow(<Header />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
