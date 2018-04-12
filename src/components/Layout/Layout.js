import React, { Fragment } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { devices } from "../../utils/devices";

const PageWrapper = styled.div`
  @media ${devices.mediumUp} {
    width: 80vw;
    max-width: 900px;
    margin: 0 auto;
  }
`;

const Layout = props => {
  return (
    <Fragment>
      <Header />
      <PageWrapper>{props.children}</PageWrapper>
    </Fragment>
  );
};

export default Layout;
