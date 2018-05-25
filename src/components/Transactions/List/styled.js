import styled from "styled-components";
import { devices } from "utils/devices";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  color: #484848;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media ${devices.small} {
    padding: 16px;
    margin-top: 32px;
  }

  @media ${devices.mediumUp} {
    padding: 32px;
    margin: 32px auto;
    border-radius: 2px;
  }
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;

  @media ${devices.small} {
    flex-direction: column;
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

  @media ${devices.small} {
    margin-top: 8px;
    margin-bottom: 24px;
  }
`;

export const MonthSelector = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: default;

  @media ${devices.mediumUp} {
    position: absolute;
    left: calc(50% - 153.28px);
  }
`;

export const Arrow = styled.div`
  margin: 0 24px;
  text-align: center;
  width: 32px;
  font-size: 32px;
  line-height: 27px;
  font-weight: 600;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const CurrentMonth = styled.div`
  width: 160px;
  text-align: center;
`;

export const BlankStateMessage = styled.p`
  display: block;
  color: #999;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 55px;
  margin-bottom: 16px;
`;
