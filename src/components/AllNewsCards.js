import React, { Fragment, useState, useMemo } from "react";
import { Button, Grid } from "@mui/material";
import newsStyles from "../styles/newsStyles";
import { allNewsJSON } from "./allNewsJSON";
import NewsCards from "./NewsCards";

const AllNewsCards = () => {
  const classes = newsStyles();
  const [displayedCardCount, setDisplayedCardCount] = useState(8);

  const displayedArticles = useMemo(
    () => allNewsJSON.articles.slice(0, displayedCardCount),
    [displayedCardCount]
  );

  return (
    <Fragment>
      <NewsCards cardsList={displayedArticles} />
      <Grid container className={classes.centeredShowAllButton}>
        <Button
          onClick={() => {
            setDisplayedCardCount(
              (prevDisplayedCardCount) => prevDisplayedCardCount + 8
            );
          }}
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
