import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledForm = styled.form`
  width: 100%;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  font: inherit;
  font-size: 12px;
  background-color: #333;
  border-radius: 2px;
  color: #fff;
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
  font-size: 22px;
`;

export const Alternate = styled.div`
  font-size: 12px;
  color: #333;
  margin-top: 32px;
  text-align: center;
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  font-weight: 600;
`;

export const ErrorMessage = styled.p`
  color: salmon;
  font-size: 14px;
  margin: 16px 0;
`;
