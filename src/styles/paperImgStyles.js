import { makeStyles } from "@mui/styles";
import Image from "../assets/images/coverImg.jpeg";

const paperImgStyles = makeStyles(({ theme }) => ({
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    height: "50vh",
    backgroundSize: "cover",
    width: "95%",
    margin: "20px auto",
    borderRadius: 10,
    marginTop: 90,
  },
  overlay: {
    textAlign: "center",
    height: "50vh",
    backgroundColor: "rgba(56,56,56,0.43)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
  },
}));

export default paperImgStyles;
