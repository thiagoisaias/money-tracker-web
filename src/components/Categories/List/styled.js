import styled from "styled-components";
import { devices } from "../../../utils/devices";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  color: #484848;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media ${devices.small} {
    padding: 32px 16px;
  }

  @media ${devices.mediumUp} {
    padding: 32px;
    margin: 32px auto;
    border-radius: 2px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media ${devices.mediumUp} {
    margin-left: 16px;
  }
`;

export const LinkButton = styled(NavLink)`
  display: block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const ErrorMessage = styled.p`
  color: salmon;
  font-size: 14px;
  margin-top: 16px;
`;

export const BlankStateMessage = styled.p`
  display: block;
  color: #999;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 32px;
  margin-left: 16px;
`;
