import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../../../utils/devices";
import { format } from "date-fns";

const Container = styled.div`
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`;

const ItemInfoContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
`;

const TransactionType = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${"" /* opacity: 0.8; */}
  background-color: ${props =>
    props.type === "earning" ? "#8CD88C" : "salmon"};

  @media ${devices.small} {
    margin-right: 8px;
  }

  @media ${devices.mediumUp} {
    margin: 0 16px;
  }
`;

const Description = styled.div`
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

const CategoryContainer = styled.div`
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

const CategoryName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CategoryColor = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  margin: 5px;
  background-color: ${props => props.color};
`;

const Value = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props =>
    props.transactionType === "earning" ? "#8CD88C" : "salmon"};

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

const DateText = styled.div`
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

const Account = styled.div`
  font-size: 12px;
  @media ${devices.mediumUp} {
    margin-left: 16px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  color: #777;
  font-size: 12px;

  @media ${devices.mediumUp} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const Action = styled.div`
  margin-left: 16px;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const actionClick = action => {
  console.log(`Clicked ${action}`);
};

const TransactionItem = props => {
  return (
    <Container
      onClick={() => {
        props.handleActiveItem(props.id);
      }}
      isActive={props.isActive}
    >
      <ItemInfoContainer>
        <TransactionType type={props.transaction_type} />
        <DateText>{format(new Date(props.date), "DD")}</DateText>
        <Description> {props.description} </Description>
        <CategoryContainer>
          <CategoryColor color={props.category.color} />
          <CategoryName>{props.category.name}</CategoryName>
        </CategoryContainer>
        <Value transactionType={props.transaction_type}>
          {`${props.value.toLocaleString()}`}
        </Value>
      </ItemInfoContainer>
      <Row>
        <Account>{props.account.name}</Account>
        <ActionsContainer>
          <Action
            onClick={() => {
              actionClick("Edit");
            }}
          >
            {"Edit"}
          </Action>
          <Action
            onClick={() => {
              actionClick("Delete");
            }}
          >
            {"Delete"}
          </Action>
        </ActionsContainer>
      </Row>
    </Container>
  );
};

TransactionItem.propTypes = {
  account: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    initialBalance: PropTypes.number.isRequired
  }).isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  value: PropTypes.number.isRequired,
  transactionType: PropTypes.string.isRequired,
  handleActiveItem: PropTypes.func.isRequired
};

export default TransactionItem;
