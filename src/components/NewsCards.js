import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ButtonBase, CardActionArea, Grid } from "@mui/material";
import newsStyles from "../styles/newsStyles";
import { useHistory } from "react-router-dom";
import { RoutesPaths } from "../Routing/routesPath";
import moment from "moment";

const NewsCards = ({ cardsList }) => {
  const classes = newsStyles();
  const history = useHistory();

  const handleOnClickNews = () => {
    return history.push(RoutesPaths.NewsDetails);
  };

  const formatDate = (date) => {
    return moment(date).format("MMMM MM/YYYY HH:mm A");
  };

  return (
    <Fragment>
      <Grid container className={classes.recentlyAddedTxt}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight={"bold"}>
            Recently Added
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        {cardsList?.map((article) => (
          <Grid className={classes.newsCardGrid} item xs={6} md={3}>
            <Card className={classes.newsCard}>
              <ButtonBase onClick={handleOnClickNews}>
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
                      {formatDate(new Date(article.publishedAt))}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </ButtonBase>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default NewsCards;
