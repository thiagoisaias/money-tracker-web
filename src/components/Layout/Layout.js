import React, { Fragment } from "react";
import HeaderContainer from "../Header/Container";

import { PageWrapper } from "./styled";

const Layout = props => {
  return (
    <Fragment>
      <HeaderContainer />
      <PageWrapper>{props.children}</PageWrapper>
    </Fragment>
  );
};

export default Layout;
