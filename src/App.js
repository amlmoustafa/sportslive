import "./App.css";
import Header from "./components/Header";
import PaperImg from "./components/PaperImg";
import Footer from "./components/Footer";
import { RoutesPaths } from "./Routing/routesPath";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
} from "react-router-dom";
import AllNews from "./components/AllNews";
import { Button } from "@material-ui/core";

const AllNewsBtn = () => {
  const history = useHistory();

  const navigateToAllNew = () => {
    return history.push(RoutesPaths.AllNews);
  };
  return (
    <Router>
      <Button onClick={navigateToAllNew} id="submitButton" variant="contained">
        show all
      </Button>
      <Switch>
        <Route path="/allNews">
          <AllNews />
        </Route>
      </Switch>
    </Router>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <PaperImg />

        <AllNews />
        <AllNewsBtn />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
