import { makeStyles } from "@mui/styles";

const headerStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#6b84ff !important",
    position: "fixed !important",
    top: 0,
    zIndex: 9,
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
    backgroundImage:
      "-webkit-linear-gradient(-30deg, #4752b5 20%, #6b84ff 20%)",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
    },
  },
}));

export default headerStyles;
