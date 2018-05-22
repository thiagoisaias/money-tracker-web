import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { CategoryItemContainer } from "./CategoryItemContainer";

describe("CategoryItemContainer", () => {
  const mockProps = {
    categoryData: {
      id: 1,
      name: "Lorem",
      color: "#A3H7S3"
    },
    handleActiveItem: jest.fn(),
    history: {},
    isActive: false,
    isLoading: false,
    onDeleteAccount: jest.fn(),
    onSetAccountToEdit: jest.fn()
  };
  const component = shallow(<CategoryItemContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
