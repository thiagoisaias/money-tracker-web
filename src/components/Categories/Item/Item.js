import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  FieldsWrapper,
  ColorField,
  Name,
  ActionsWrapper,
  Action
} from "./styled";

const Item = props => {
  const {
    categoryData,
    handleActiveItem,
    handleDelete,
    handleEdit,
    isActive
  } = props;

  return (
    <Wrapper
      isActive={isActive}
      onClick={() => handleActiveItem(categoryData.id)}
    >
      <FieldsWrapper>
        <ColorField color={categoryData.color} />
        <Name>{categoryData.name}</Name>
      </FieldsWrapper>
      <ActionsWrapper>
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
      </ActionsWrapper>
    </Wrapper>
  );
};

Item.propTypes = {
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

export default Item;
