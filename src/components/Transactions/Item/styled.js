import styled from "styled-components";
import { devices } from "utils/devices";

export const Wrapper = styled.div`
  margin: 8px 0;
  padding: 4px 0;
  font-size: 13px;
  cursor: default;
  transition: ease 0.25s;
  overflow: hidden;
  height: ${props => (props.isActive ? "48px" : "24px")};
  user-select: none;

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
    border-radius: 2px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`;

export const ItemInfoWrapper = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const TypeIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props =>
    props.type === "earning" ? "#71DD71" : "salmon"};

  @media ${devices.small} {
    margin-right: 8px;
  }

  @media ${devices.mediumUp} {
    margin: 0 16px;
  }
`;

export const Description = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${devices.small} {
    width: 30%;
  }

  @media ${devices.mediumUp} {
    width: 55%;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.small} {
    width: 30%;
  }

  @media ${devices.mediumUp} {
    width: 20%;
    justify-content: flex-end;
  }
`;

export const CategoryName = styled.div`
`;

export const CategoryColor = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  margin: 5px;
  background-color: ${props => props.color};
`;

export const Value = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props =>
    props.transactionType === "earning" ? "#71DD71" : "salmon"};

  @media ${devices.small} {
    width: 30%;
    text-align: right;
  }

  @media ${devices.mediumUp} {
    width: 15%;
    text-align: right;
    margin-right: 16px;
  }
`;

export const DateText = styled.div`
  color: #777;
  font-weight: 600;

  @media ${devices.small} {
    width: 7%;
    margin-right: 8px;
  }

  @media ${devices.mediumUp} {
    width: 5%;
    margin-right: 16px;
  }
`;

export const Account = styled.div`
  font-size: 12px;
  @media ${devices.mediumUp} {
    margin-left: 16px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #777;
  font-size: 12px;

  @media ${devices.mediumUp} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Action = styled.div`
  margin-left: 16px;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
