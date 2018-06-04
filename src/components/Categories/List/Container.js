import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { categoryType } from "types";

import {
  clearCategoriesError,
  fetchCategories
} from "store/actions/categories/categories";

import List from "./List";

export class Container extends Component {
  static propTypes = {
    categoryList: PropTypes.arrayOf(categoryType).isRequired,
    clearCategoriesError: PropTypes.func.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    fetchCategories: PropTypes.func.isRequired
  };

  render() {
    const { categoryList, error, isLoading } = this.props;

    return (
      <List categoryList={categoryList} error={error} isLoading={isLoading} />
    );
  }

  componentDidMount() {
    const { fetchCategories } = this.props;

    fetchCategories();
  }

  componentWillUnmount() {
    const { error, clearCategoriesError } = this.props;

    if (error) {
      clearCategoriesError();
    }
  }
}

const mapStateToProps = state => ({
  categoryList: state.categories.categoryList,
  error: state.categories.error,
  isLoading: state.categories.isLoading
});

const mapDispatchToProps = {
  clearCategoriesError,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
