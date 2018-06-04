import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PrivateRoute from "../PrivateRoute";

describe("Private Route", () => {
  const mockProps = {
    isAuthenticated: true
  };
  const component = shallow(<PrivateRoute {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
