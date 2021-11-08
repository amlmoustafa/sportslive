import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import newsStyles from "../styles/newsStyles";
import { allNewsJSON } from "./allNewsJSON";
import NewsCards from "./NewsCards";

const AllNewsCards = () => {
  const classes = newsStyles();

  const showMore = () => {
    return allNewsJSON.articles.slice(4, 11).map((article) => (
      <Grid className={classes.newsCardGrid} item xs={6} md={3}>
        <Card className={classes.newsCard}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={article.urlToImage}
              alt="green iguana"
              className={classes.newsCardImg}
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                {article.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {article.publishedAt}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };
  return (
    <Fragment>
      <NewsCards />
      <Grid container className={classes.centeredShowAllButton}>
        <Button
          onClick={showMore}
          id="submitButton"
          variant="contained"
          className={classes.showAllButton}
        >
          Show More
        </Button>
      </Grid>
    </Fragment>
  );
};

export default AllNewsCards;
