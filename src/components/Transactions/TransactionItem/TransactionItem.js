import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../../../utils/devices";
import { format } from "date-fns";

const Container = styled.div`
  margin: 8px 0;
  font-size: 13px;
  cursor: default;
  transition: ease 0.2s;

  &:hover {
    cursor: pointer;
    border-color: #ddd;
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

const ItemInfoContainer = styled.div`
  line-height: 24px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 4px 0;
`;

const TransactionType = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.8;
  background-color: ${props =>
    props.type === "earning" ? "#68B168" : "#FC6669"};

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
    width: 40%;
  }
`;

const CategoryContainer = styled.div`
  display: flex;

  @media ${devices.small} {
    width: 30%;
  }

  @media ${devices.mediumUp} {
    width: 30%;
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
    props.transactionType === "earning" ? "#68B168" : "#FC6669"};

  @media ${devices.small} {
    width: 22%;
    text-align: right;
  }

  @media ${devices.mediumUp} {
    width: 15%;
    text-align: right;
  }
`;

const DateText = styled.div`
  color: #777;
  font-weight: 600;

  @media ${devices.small} {
    margin-right: 8px;
  }

  @media ${devices.mediumUp} {
    margin-right: 16px;
  }
`;

const TransactionItem = props => {
  return (
    <Container>
      <ItemInfoContainer>
        <TransactionType type={props.transaction_type} />
        <DateText>{format(new Date(props.date), "DD")}</DateText>
        <Description> {props.description} </Description>
        <CategoryContainer>
          <CategoryColor color={props.category.color} />
          <CategoryName>{props.category.name}</CategoryName>
        </CategoryContainer>
        <Value transactionType={props.transaction_type}>
          {" "}
          $ {props.value.toLocaleString()}{" "}
        </Value>
      </ItemInfoContainer>
    </Container>
  );
};

TransactionItem.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string
  }).isRequired,
  value: PropTypes.number.isRequired,
  transaction_type: PropTypes.string.isRequired
};

export default TransactionItem;
