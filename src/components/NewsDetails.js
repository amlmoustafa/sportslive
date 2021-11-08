import { Container, Link, Typography } from "@mui/material";
import newsDetails from "../assets/images/newsDetailsImg.png";
import newsDetailsSetyles from "../styles/newsDetailsSetyles";

const NewsDetails = () => {
  const classes = newsDetailsSetyles();
  return (
    <Container>
      <img
        className={classes.newsDetailsImg}
        src={newsDetails}
        alt={"newsDetails"}
      />
      <Typography variant="h4" className={classes.newsDetailsHeader}>
        Boxing World Cup
      </Typography>
      <Typography className={classes.detailsInfoContainer} variant="body1">
        <Link href="#" underline="none" color="inherit" fontWeight={"bold"}>
          {"by steven granger"}
        </Link>
        <Link href="#" underline="none" color="inherit" fontWeight={"bold"}>
          {"february 18,2020"}
        </Link>
        <Link href="#" underline="none" color="inherit" fontWeight={"bold"}>
          {"100 comments"}
        </Link>
      </Typography>
      <Typography
        variant="body1"
        fontWeight={"bold"}
        className={classes.newsDetailsDescription}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <Typography
        variant="body1"
        fontWeight={"bold"}
        className={classes.newsDetailsDescription}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </Container>
  );
};

export default NewsDetails;
