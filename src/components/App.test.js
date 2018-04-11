import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const component = shallow(<App />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
