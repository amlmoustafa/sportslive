import { makeStyles } from "@material-ui/core/styles";

const newsStyles = makeStyles(() => ({
  newsCardGrid: {
    display: "flex",
    justifyContent: "space-around",
  },
  newsCard: {
    width: "240px !important",
    boxShadow: "none !important",
  },
  newsCardImg: {
    height: "240px",
  },
  recentlyAddedTxt: {
    width: "92%",
    margin: "40px auto !important",
  },
}));

export default newsStyles;
