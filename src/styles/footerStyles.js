import { makeStyles } from "@material-ui/core/styles";

const footerStyles = makeStyles(() => ({
  footerContainer: {
    backgroundColor: "#232960",
    padding: "30px 0",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid #3a4185",
    margin: "30px auto",
    width: "93%",
    padding: "30px 0",
  },
  footerContentContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    width: "93% !important",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export default footerStyles;
