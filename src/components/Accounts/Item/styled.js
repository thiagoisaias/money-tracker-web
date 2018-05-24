import styled from "styled-components";
import { devices } from "utils/devices";

export const Wrapper = styled.div`
  margin: 16px 0;
  padding: 6px 0;
  border-radius: 2px;
  height: ${props => (props.isActive ? "56px" : "36px")};
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

export const Name = styled.div`
  margin-bottom: 8px;
`;

export const Balance = styled.div`
  color: #67b8ff;
  font-weight: 600;
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
