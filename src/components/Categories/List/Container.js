import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  clearCategoriesError,
  fetchCategories
} from "store/actions/categories/categories";

import List from "./List";

export class Container extends Component {
  render() {
    const { categoryList, error, isLoading } = this.props;
    return (
      <List categoryList={categoryList} error={error} isLoading={isLoading} />
    );
  }

  componentDidMount() {
    const { onFetchCategoryList } = this.props;
    onFetchCategoryList();
  }

  componentWillUnmount() {
    const { error, onClearCategoriesError } = this.props;

    if (error) {
      onClearCategoriesError();
    }
  }
}

Container.propTypes = {
  categoryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onFetchCategoryList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  categoryList: state.categories.categoryList,
  error: state.categories.error,
  isLoading: state.categories.isLoading
});

const mapDispatchToProps = {
  onClearCategoriesError: clearCategoriesError,
  onFetchCategoryList: fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
