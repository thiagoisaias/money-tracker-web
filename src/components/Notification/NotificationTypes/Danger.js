import React from "react";
import PropTypes from "prop-types";
import dangerIcon from "assets/icons/danger.svg";
import { Icon, CloseButton, Wrapper } from "../styled";

const Danger = props => {
  const { message, onDismiss } = props;
  return (
    <Wrapper>
      <Icon src={dangerIcon} />
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

Danger.propTypes = {
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Danger;
