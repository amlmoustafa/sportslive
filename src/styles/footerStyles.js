import { makeStyles } from "@mui/styles";

const footerStyles = makeStyles(() => ({
  footerContainer: {
    backgroundColor: "#232960 !important",
    padding: "30px 0",
    marginTop: 50,
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
