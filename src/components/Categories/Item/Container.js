import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { categoryType } from "types";

import {
  deleteCategory,
  setCategoryToEdit
} from "store/actions/categories/categories";

import Item from "./Item";

export class Container extends Component {
  static propTypes = {
    categoryData: categoryType.isRequired,
    handleActiveItem: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    setCategoryToEdit: PropTypes.func.isRequired
  };

  handleDelete = () => {
    const { categoryData, isLoading, deleteCategory } = this.props;

    if (isLoading) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete this category?")) {
      return;
    }

    deleteCategory(categoryData.id);
  };

  handleEdit = () => {
    const { categoryData, history, setCategoryToEdit } = this.props;

    setCategoryToEdit(categoryData);
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

const mapStateToProps = state => ({
  isLoading: state.categories.isLoading
});

const mapDispatchToProps = {
  deleteCategory,
  setCategoryToEdit
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
