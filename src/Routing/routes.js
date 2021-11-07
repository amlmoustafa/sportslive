import React from "react";
import AllNews from "../components/AllNews";
import { RoutesPaths } from "./routesPath";

const NewsDetails = React.lazy(() => import("../components/NewsDetails"));

const appRoutes = [
  {
    path: RoutesPaths.AllNews,
    name: "All News",
    Component: AllNews,
  },
  {
    path: RoutesPaths.NewsDetails,
    name: "News Details",
    Component: NewsDetails,
  },
];

export default appRoutes;
