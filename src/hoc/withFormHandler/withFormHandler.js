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

const withFormHandler = (WrappedComponent, props) => {
  return class extends Component {
    handleInputChange = (newValue, key, formFields, checkFieldValidity) => {
      const currentFormField = formFields[key];

      const updatedField = {
        ...currentFormField,
        value: newValue,
        isValid: checkFieldValidity(newValue, currentFormField.validation),
        touched: true
      };

      const updatedFormFields = {
        ...formFields,
        [key]: updatedField
      };

      const isFormValid = this.checkFormValidity(
        updatedFormFields,
        checkFieldValidity
      );

      return {
        isFormValid: isFormValid,
        formFields: {
          ...updatedFormFields
        }
      };
    };

    checkFormValidity = (formFields, checkFieldValidity) => {
      let isFormValid = true;

      for (let fieldKey in formFields) {
        isFormValid =
          checkFieldValidity(
            formFields[fieldKey].value,
            formFields[fieldKey].validation
          ) && isFormValid;
      }

      return isFormValid;
    };

    generateFormData = formFields => {
      const formData = {};
      for (let fieldKey in formFields) {
        if (formFields[fieldKey].elementConfig.type === "date") {
          // Saved value is a moment object
          formData[fieldKey] = formFields[fieldKey].value.format("MM/DD/YYYY");
        } else if (formFields[fieldKey].elementType === "select") {
          // Saved value is a object of shape { value: 121 label: Lorem} where value is the id
          formData[fieldKey] = formFields[fieldKey].value.value;
        } else {
          formData[fieldKey] = formFields[fieldKey].value;
        }
      }

      return formData;
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          checkFormValidity={this.checkFormValidity}
          generateFormData={this.generateFormData}
          handleInputChange={this.handleInputChange}
        />
      );
    }
  };
};

export default withFormHandler;
