import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

import useStyle from "../utils/styles";

function Layout({ children }) {
  const classes = useStyle();
  return (
    <div>
      <Head>
        <title>MGHotel</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>MGHotel</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>Made with ❤️ by{" Sachin96Boy "}</Typography>
      </footer>
    </div>
  );
}

export default Layout;
