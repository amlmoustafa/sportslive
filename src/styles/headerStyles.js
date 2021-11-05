import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles(() => ({
  navbar: { backgroundColor: "#6b84ff !important" },
  logoContainer: {
    backgroundColor: "#4752b5",
  },
  navbarIcons: {
    float: "right",
    alignSelf: "flex-end",
    display: "block !important",
  },
  callAPIBtn: {
    backgroundColor: "#4752b5",
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
}));

export default headerStyles;
