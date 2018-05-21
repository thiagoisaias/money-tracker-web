import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AuthPage from "./AuthPage";

describe("AuthPage", () => {
  const component = shallow(<AuthPage />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
