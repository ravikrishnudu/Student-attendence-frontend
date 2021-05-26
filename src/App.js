import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Class from "./components/Class";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/class" component={Class} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
