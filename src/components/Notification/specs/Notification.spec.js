import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Notification from "../Notification";

describe("Notification", () => {
  const mockProps = {
    type: "DANGER",
    message: "Something went wrong.",
    dismissNotification: jest.fn()
  };
  const component = shallow(<Notification {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
