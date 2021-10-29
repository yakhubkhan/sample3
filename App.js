import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Review_2 from "./components/Review_2";
import Analasys from "./components/Analasys";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/review" exact component={Review} />
          <Route path="/review/review_2" exact component={Review_2} />

          <Route path="/analasys" exact component={Analasys} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
