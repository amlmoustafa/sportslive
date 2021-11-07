import { makeStyles } from "@material-ui/core/styles";

const newsStyles = makeStyles(() => ({
  newsCardGrid: {
    display: "flex",
    justifyContent: "space-around",
  },
  newsCard: {
    width: "240px !important",
    boxShadow: "none !important",
    backgroundColor: "#f8f8f8 !important",
    margin: "20px 0",
    "&:hover": {
      backgroundColor: "#f8f8f8 !important",
    },
  },
  newsCardImg: {
    height: "240px",
  },
  recentlyAddedTxt: {
    width: "92% !important",
    margin: "20px auto !important",
  },
  allNewsHeaderContainer: {
    width: "92% !important",
    margin: " auto !important",
    display: "flex",
    justifyContent: "flex-end",
  },
  showAllButtonContainer: {
    display: "flex !important",
    justifyContent: "flex-end !important",
  },
  showAllButton: {
    backgroundColor: "#FFFFFF !important",
    color: "#000000 !important",
    textTransform: "capitalize !important",
  },
  centeredShowAllButton: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default newsStyles;
