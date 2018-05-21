import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

describe("App", () => {
  const mockProps = {
    isAuthenticated: true
  };
  const component = shallow(<App {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
