import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projetcs/Projects";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
