import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";
import Class from "./components/Class";
import Home from "./components/Home";
import RecodAttendance from "./components/RecodAttendance";
import RecodedAttedance from "./components/RecodedAttedance";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/class" component={Class} />
          <Route exact path="/student/:id/update" component={UpdateStudent} />
          <Route path="/recodattendance/:gradeId" component={RecodAttendance} />
          <Route exact path="/recodedattendance" component={RecodedAttedance} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
