import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/project/:id' component={ProjectPage} />
      </Switch>
    </Router>
  );
}

export default App;
