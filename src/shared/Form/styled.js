import styled from "styled-components";
import { devices } from "utils/devices";

export const Container = styled.div`
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
  }
`;

export const StyledInput = styled.input`
  border: ${props =>
    !props.isValid && props.touched
      ? "1px solid #f9b498"
      : "1px solid #f2f2f2"};
  border-radius: 2px;
  padding: 6px;
  font: inherit;
  color: inherit;

  &:focus {
    border: 1px solid #ddd;
  }

  &::placeholder {
    opacity: 0.6;
  }
`;

export const Row = styled.div`
  display: flex;
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const Label = styled.label`
  font-weight: 400;
  color: #777;
  margin-bottom: 6px;
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
  color: #e75252;
  font-size: 14px;
  margin-top: 16px;
`;
