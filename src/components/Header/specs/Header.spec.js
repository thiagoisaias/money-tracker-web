import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "../Header";

describe("Header", () => {
  const mockProps = {
    history: {},
    onLogout: jest.fn()
  };

  const component = shallow(<Header {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
