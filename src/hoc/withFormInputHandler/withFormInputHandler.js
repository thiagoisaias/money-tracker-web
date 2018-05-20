import React, { Component } from "react";

/*
Form State - Example
state = {
  isFormValid: false,
  formFields: {
    fieldName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter field placeholder"
      },
      name: "Field Name",
      value: this.props.fieldName || "",
      validation: {
        required: true
      },
      isValid: false,
      touched: false
    }
  }
}
*/

const withFormInputHandler = (WrappedComponent, props) => {
  return class extends Component {
    handleInputChange = (event, formFields, checkFieldValidity) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      const currentFormField = formFields[name];

      const updatedField = {
        ...currentFormField,
        value: value,
        isValid: checkFieldValidity(value, currentFormField.validation),
        touched: true
      };
      const updatedFormFields = {
        ...formFields,
        [name]: updatedField
      };

      // Verify if all fields are valid and then if the form is valid
      let isFormValid = true;
      for (let fieldKey in updatedFormFields) {
        isFormValid =
          checkFieldValidity(
            updatedFormFields[fieldKey].value,
            updatedFormFields[fieldKey].validation
          ) && isFormValid;
      }

      return {
        isFormValid: isFormValid,
        formFields: {
          ...updatedFormFields
        }
      };
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleInputChange={this.handleInputChange}
        />
      );
    }
  };
};

export default withFormInputHandler;
