import React, { Fragment } from "react";
import HomePageArticles from "./HomePageArticles";
import PaperImg from "./PaperImg";

const HomePage = () => {
  return (
    <Fragment>
      <PaperImg />
      <HomePageArticles />
    </Fragment>
  );
};

export default HomePage;
