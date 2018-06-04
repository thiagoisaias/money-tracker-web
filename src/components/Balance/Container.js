import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Balance from "./Balance";

import { getOverallBalance } from "store/actions/home/home";

export class Container extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    overallBalance: PropTypes.string
  };

  render() {
    return <Balance {...this.props} />;
  }

  componentDidMount() {
    this.props.getOverallBalance();
  }
}

const mapStateToProps = state => ({
  isLoading: state.home.isLoading,
  overallBalance: state.home.overallBalance
});

const mapDispatchToProps = {
  getOverallBalance
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
