import { makeStyles } from "@mui/styles";

const footerStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#232960 !important",
    padding: "30px 0",
    marginTop: 50,
  },
  footerToolbar: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid #3a4185",
    margin: "30px auto",
    width: "93%",
    padding: "30px 0",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
  },
  footerContentContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    width: "93% !important",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  footerLinks: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export default footerStyles;
