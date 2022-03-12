import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MatLink,
  createTheme,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import useStyle from "../utils/styles";

function Layout({ title, description, children }) {
  const theme = createTheme();
  const classes = useStyle();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - MGHotel` : "MGHotel"}</title>
        {description && <meta name="description" content={description} />}
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
