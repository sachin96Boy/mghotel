import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  navbar: {
    backgroundColor: " #BA7C01",
    "& a": {
      color: "#ffffff",
      marginLeft: "10",
    },
  },
  main: {
    minHeight: "80vh",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  footer: {
    color: "#ffffff",
    backgroundColor: "#BA7C01",
    textAlign: "center",
    padding: "10px",
  },
});

export default useStyle;
