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

    handleDateChange = (selectedDate, key, formFields, checkFieldValidity) => {
      const currentFormField = formFields[key];

      const updatedField = {
        ...currentFormField,
        value: selectedDate,
        isValid: checkFieldValidity(selectedDate, currentFormField.validation),
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
          //Should be a Moment object
          formData[fieldKey] = formFields[fieldKey].value.format("MM/DD/YYYY");
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
          handleDateChange={this.handleDateChange}
        />
      );
    }
  };
};

export default withFormHandler;
