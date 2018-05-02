import React, { Component } from "react";

const withExpandableItem = (WrappedComponent, props) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeItemId: null
      };
    }

    handleActiveItem = itemId => {
      if (this.state.activeItemId === itemId) {
        this.setState({
          activeItemId: null
        });
      } else {
        this.setState({
          activeItemId: itemId
        });
      }
    };

    render() {
      return (
        <WrappedComponent
          activeItemId={this.state.activeItemId}
          handleActiveItem={this.handleActiveItem}
          {...this.props}
        />
      );
    }
  };
};

export default withExpandableItem;
