import styled from "styled-components";
import { devices } from "utils/devices";

export const Wrapper = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;

  @media ${devices.small} {
    padding: 0 16px;
  }

  @media ${devices.mediumUp} {
    padding: 0 32px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  > a {
    margin: 0 6px;
  }
`;

export const Logo = styled.div`
  color: #fff;
`;

export const Logout = styled.div`
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
