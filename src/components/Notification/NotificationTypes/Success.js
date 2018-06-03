import React from "react";
import PropTypes from "prop-types";
import successIcon from "assets/icons/success.svg";
import { Icon, CloseButton, Wrapper } from "../styled";

const Success = props => {
  const { message, onDismiss } = props;
  return (
    <Wrapper>
      <Icon src={successIcon} />
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

Success.propTypes = {
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Success;
