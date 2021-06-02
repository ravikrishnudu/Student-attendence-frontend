import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";
import Class from "./components/Class";
import Home from "./components/Home";
import RecodAttendance from "./components/RecodAttendance";
import RecodedAttedance from "./components/RecodedAttedance";

axios.defaults.baseURL = "https://student-attendance-backend.herokuapp.com";
console.log(process.env.REACT_APP_API_URL);

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/class" component={Class} />
          <Route exact path="/student/:id/update" component={UpdateStudent} />
          <Route
            path="/recodattendance/class/:gradeId"
            component={RecodAttendance}
          />
          <Route
            exact
            path="/recodedattendance/:gradeId"
            component={RecodedAttedance}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
