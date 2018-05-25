import styled from "styled-components";
import { devices } from "utils/devices";

export const Wrapper = styled.div`
  margin: 16px 0;
  padding: 6px 0;
  border-radius: 2px;
  height: ${props => (props.isActive ? "36px" : "16px")};
  transition: ease 0.25s;
  overflow: hidden;

  &:hover {
    border-color: #ddd;
    cursor: pointer;
  }

  @media ${devices.small} {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }

  @media ${devices.mediumUp} {
    border: 1px solid #f2f2f2;
    padding-left: 16px;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  margin-left: 16px;
`;

export const ColorField = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 2px;
  background-color: ${props => props.color};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  color: #777;
  font-size: 12px;
  margin-top: 8px;
`;

export const Action = styled.div`
  margin-right: 16px;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
