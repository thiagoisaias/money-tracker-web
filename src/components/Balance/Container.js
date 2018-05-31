import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Balance from "./Balance";

import { getOverallBalance } from "store/actions/users/users";

export class Container extends Component {
  render() {
    return <Balance {...this.props} />;
  }

  componentDidMount() {
    this.props.onGetOverallBalance();
  }
}

Container.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  overallBalance: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.users.isLoading,
  overallBalance: state.users.overallBalance
});

const mapDispatchToProps = dispatch => ({
  onGetOverallBalance: () => {
    dispatch(getOverallBalance());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
