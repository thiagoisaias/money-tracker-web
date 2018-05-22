import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../../../utils/devices";

const Container = styled.div`
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

const FieldsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-left: 16px;
`;

const ColorField = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 2px;
  background-color: ${props => props.color};
`;

const ActionsContainer = styled.div`
  display: flex;
  color: #777;
  font-size: 12px;
  margin-top: 8px;
`;

const Action = styled.div`
  margin-right: 16px;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const CategoryItem = props => {
  const {
    categoryData,
    handleActiveItem,
    handleDelete,
    handleEdit,
    isActive
  } = props;

  return (
    <Container
      isActive={isActive}
      onClick={() => handleActiveItem(categoryData.id)}
    >
      <FieldsContainer>
        <ColorField color={categoryData.color} />
        <Name>{categoryData.name}</Name>
      </FieldsContainer>
      <ActionsContainer>
        <Action
          onClick={() => {
            handleEdit();
          }}
        >
          {"Edit"}
        </Action>
        <Action
          onClick={() => {
            handleDelete();
          }}
        >
          {"Delete"}
        </Action>
      </ActionsContainer>
    </Container>
  );
};

CategoryItem.propTypes = {
  categoryData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  isActive: PropTypes.bool.isRequired
};

export default CategoryItem;
