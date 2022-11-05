import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MatLink,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import jsCookie from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/store";

import useStyle from "../utils/styles";

function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "2.5rem",
        fontWeight: "400",
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.6rem",
        fontWeight: "400",
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#BA7C01",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });
  const classes = useStyle();
  const darkModeChangeHandler = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
    const newDarkMode = !darkMode;
    jsCookie.set("darkMode", newDarkMode);
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - MGHotel` : "MGHotel"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Link href="/" passHref>
              <MatLink>
                <Typography className={classes.brand}>MGHotel</Typography>
              </MatLink>
            </Link>
            <div className={classes.grow} />
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
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
      </ThemeProvider>
    </div>
  );
}

export default Layout;
