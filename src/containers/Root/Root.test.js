import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Root } from "./Root";

describe("Root", () => {
  const mockProps = {
    isAuthenticated: true,
    checkAuthStorage: jest.fn()
  };
  const component = shallow(<Root {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
