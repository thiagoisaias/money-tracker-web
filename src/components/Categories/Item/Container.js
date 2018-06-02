import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  deleteCategory,
  setCategoryToEdit
} from "store/actions/categories/categories";

import Item from "./Item";

export class Container extends Component {
  handleDelete = () => {
    const { categoryData, isLoading, onDeleteCategory } = this.props;
    if (isLoading) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete this category?")) {
      return;
    }
    onDeleteCategory(categoryData.id);
  };

  handleEdit = () => {
    const { categoryData, history, onSetCategoryToEdit } = this.props;
    onSetCategoryToEdit(categoryData);
    history.push(`/categories/${categoryData.id}/edit`);
  };

  render() {
    const { categoryData, handleActiveItem, isActive } = this.props;
    return (
      <Item
        categoryData={categoryData}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
      />
    );
  }
}

Container.propTypes = {
  categoryData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDeleteCategory: PropTypes.func.isRequired,
  onSetCategoryToEdit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.categories.isLoading
});

const mapDispatchToProps = dispatch => ({
  onDeleteCategory: categoryId => {
    dispatch(deleteCategory(categoryId));
  },

  onSetCategoryToEdit: category => {
    dispatch(setCategoryToEdit(category));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
