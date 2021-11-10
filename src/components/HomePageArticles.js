import React from "react";
import { Button } from "@mui/material";
import newsStyles from "../assets/styles/newsStyles";
import { Fragment } from "react";
import { RoutesPaths } from "../Routing/routesPath";
import { useHistory } from "react-router-dom";
import { Box } from "@mui/system";
import { allNewsJSON } from "../data/allNewsJSON";
import ArticleCards from "./ArticleCards";

const HomePageArticles = () => {
  const classes = newsStyles();
  const history = useHistory();

  const navigateToAllNew = () => {
    return history.push(RoutesPaths.HomePageArticles);
  };

  return (
    <Fragment>
      <Box container className={classes.allNewsHeaderContainer}>
        <Button
          onClick={navigateToAllNew}
          id="submitButton"
          variant="contained"
          className={classes.showAllButton}
        >
          Show all
        </Button>
      </Box>
      <ArticleCards cardsList={allNewsJSON.articles.slice(0, 8)} />
    </Fragment>
  );
};

export default HomePageArticles;
