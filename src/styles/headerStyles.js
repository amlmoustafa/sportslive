import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles(() => ({
  navbar: {
    backgroundColor: "#6b84ff !important",
    position: "fixed !important",
    top: 0,
  },
  logoContainer: {
    backgroundColor: "#4752b5",
  },
  navbarIcons: {
    float: "right",
    alignSelf: "flex-end",
    display: "block !important",
  },
  callAPIBtn: {
    backgroundColor: "#4752b5 !important",
    color: "#FFFFFF !important",
    fontWeight: "bold !important",
    textTransform: "capitalize !important",
  },
  navbarLogo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  toolbar: {
    backgroundColor: "#6b84ff",
    backgroundImage:
      "-webkit-linear-gradient(-30deg, #4752b5 15%, #6b84ff 15%)",
  },
}));

export default headerStyles;
