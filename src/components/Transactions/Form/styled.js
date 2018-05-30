import styled from "styled-components";
import { devices } from "utils/devices";

import Select from "react-select";
import "assets/react-select-override.css";

import DatePicker from "react-datepicker";
import "assets/react-datepicker-override.css";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  color: #484848;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media ${devices.small} {
    padding: 32px 16px;
  }

  @media ${devices.mediumUp} {
    padding: 32px 32px 55px 32px;
    margin: 32px auto;
    border-radius: 2px;
    width: 70%;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 45%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media ${devices.small} {
    width: 100%;
  }

  @media ${devices.mediumUp} {
    width: ${props => (props.largeHalf ? "45%" : "100%")};
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  border: ${props =>
    !props.isValid && props.touched ? "1px solid #ddd" : "1px solid #eee"};
  border-radius: 2px;
  font: inherit;
  color: inherit;
  cursor: pointer;
  height: 30px;
  padding-left: 12px;
  width: 100%;

  &:focus {
    border: 1px solid #ddd;
  }
`;

export const StyledSelect = styled(Select)`
  outline: none;
`;

export const StyledInput = styled.input`
  border: ${props =>
    !props.isValid && props.touched ? "1px solid #ddd" : "1px solid #eee"};
  border-radius: 2px;
  font: inherit;
  color: inherit;
  height: 30px;
  padding-left: 12px;

  &:focus {
    border: 1px solid #ddd;
  }

  &::placeholder {
    opacity: 0.6;
  }
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Message = styled.div`
  font-size: 12px;
  color: #777;
`;

export const ColoredMark = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #add8e6;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 32px;
`;

export const FormContainer = styled.form``;

export const Label = styled.label`
  font-weight: 400;
  color: #777;
  margin-bottom: 6px;
`;

export const SubmitRow = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const SubmitButton = styled.button`
  border-radius: 2px;
  font: inherit;
  font-size: 12px;
  background-color: #333;
  color: #fff;
  width: 130px;
  height: 40px;

  background-color: ${props => (props.disabled ? "#777" : "#333")};

  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${props => (props.disabled ? 1 : 0.95)};
  }
`;

export const ErrorMessage = styled.p`
  color: salmon;
  font-size: 14px;
  margin-top: 16px;
`;
