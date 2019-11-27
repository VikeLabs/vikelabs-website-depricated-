import React from "react";
import "./App.css";
import { projects } from './assets/manifest';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="main-container">
        <About />
        <SocialMedia />
        <Projects projects={projects} />
      </div>
    </React.Fragment>
  );
}

export default App;
