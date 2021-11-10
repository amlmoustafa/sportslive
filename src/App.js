import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails";
import { Box } from "@mui/system";
import AllNewsCards from "./components/AllNewsCards";
import EmployeesList from "./components/EmployeesList";
import { RoutesPaths } from "./Routing/routesPath";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Box className="content">
          <Switch>
            <Route exact path={RoutesPaths.HomePage}>
              <HomePage />
            </Route>
            <Route path={RoutesPaths.AllNews}>
              <AllNewsCards />
            </Route>
            <Route path={`${RoutesPaths.ArticleDetails}/:id`}>
              <ArticleDetails />
            </Route>
            <Route path={RoutesPaths.EmployeesList}>
              <EmployeesList />
            </Route>
          </Switch>
        </Box>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
