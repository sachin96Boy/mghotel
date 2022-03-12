import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MatLink,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
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
          <Link href="/" passHref>
            <MatLink>
              <Typography className={classes.brand}>MGHotel</Typography>
            </MatLink>
          </Link>
          <div className={classes.grow} />
          <div>
            <Link href="/cart" passHref>
              <MatLink>Cart</MatLink>
            </Link>

            <Link href="/login" passHref>
              <MatLink>login</MatLink>
            </Link>
          </div>
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
