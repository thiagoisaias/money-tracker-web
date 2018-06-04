import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { categoryType } from "types";

import {
  clearCategoriesError,
  clearCategoryToEdit,
  createCategory,
  updateCategory
} from "store/actions/categories/categories";

import Form from "./Form";

export class Container extends Component {
  static propTypes = {
    categoryToEdit: categoryType,
    error: PropTypes.string,
    history: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    clearCategoriesError: PropTypes.func.isRequired,
    clearCategoryToEdit: PropTypes.func.isRequired,
    createCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
  };

  onSubmitData = formData => {
    const {
      categoryToEdit,
      history,
      isLoading,
      match,
      createCategory,
      updateCategory
    } = this.props;

    if (isLoading) {
      return;
    }

    if (match.path === "/categories/new") {
      createCategory(formData, history);
    } else if (match.path === "/categories/:id/edit" && categoryToEdit) {
      updateCategory(formData, categoryToEdit.id, history);
    } else {
      return;
    }
  };

  render() {
    const { categoryToEdit, error, isLoading, match } = this.props;
    return (
      <Form
        categoryToEdit={categoryToEdit}
        error={error}
        isLoading={isLoading}
        match={match}
        onSubmitData={this.onSubmitData}
      />
    );
  }

  componentDidMount() {
    const { categoryToEdit, history, match } = this.props;
    if (match.path === "/categories/:id/edit" && categoryToEdit === null) {
      history.push("/categories");
    }
  }

  componentWillUnmount() {
    const {
      error,
      match,
      clearCategoriesError,
      clearCategoryToEdit
    } = this.props;

    if (match.path === "/categories/:id/edit") {
      clearCategoryToEdit();
    }

    if (error) {
      clearCategoriesError();
    }
  }
}

const mapStateToProps = state => ({
  categoryToEdit: state.categories.categoryToEdit,
  error: state.categories.error,
  isLoading: state.categories.isLoading
});

const mapDispatchToProps = {
  clearCategoriesError,
  clearCategoryToEdit,
  createCategory,
  updateCategory
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
