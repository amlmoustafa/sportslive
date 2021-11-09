import { makeStyles } from "@mui/styles";

const newsDetailsSetyles = makeStyles(() => ({
  newsDetailsImg: {
    width: "100%",
  },
  newsDetailsHeader: {
    color: "#15a6eb",
    margin: "25px 0 !important",
  },
  detailsInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    textTransform: "uppercase",
    marginBottom: "40px !important",
  },
  newsDetailsDescription: {
    width: "85% !important",
    color: "#848485",
    marginBottom: "20px !important",
  },
}));

export default newsDetailsSetyles;
