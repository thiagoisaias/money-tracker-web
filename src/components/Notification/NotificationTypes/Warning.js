import React from "react";
import PropTypes from "prop-types";
import warningIcon from "assets/icons/warning.svg";
import { Icon, CloseButton, Wrapper } from "../styled";

const Warning = props => {
  const { message, onDismiss } = props;
  return (
    <Wrapper>
      <Icon src={warningIcon} />
      {message}
      <CloseButton
        onClick={() => {
          onDismiss();
        }}
      >
        &times;
      </CloseButton>
    </Wrapper>
  );
};

Warning.propTypes = {
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Warning;
