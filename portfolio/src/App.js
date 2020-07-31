import React from 'react';
import './App.css';
import "./index.css";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      
   
    
   

    <nav className="navbar navbar-expand-lg navbar-light">
  <a style={{fontFamily:"Permanent Marker", fontVariant:"small-caps", fontSize:"50px", color: "Orange"}} class="navbar-brand">Chet Martin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li style={{ marginLeft:"600px"}}  class="nav-item active">
        <a style={{fontFamily:"Saira Stencil One",fontSize:"30px", color: "teal"}} class="nav-link" href="#"> <Link to ="/">About</Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a style={{fontFamily:"Saira Stencil One", fontSize:"30px", color: "teal"}} class="nav-link" href="#"> <Link to ="/portfolio">Portfolio</Link></a>
      </li>
      <li class="nav-item">
        <a style={{fontFamily:"Saira Stencil One",fontSize:"30px", color: "teal"}} class="nav-link" href="#"> <Link to="/contact">Contact</Link></a>
      </li>
    </ul>
  </div>
</nav>

  <Switch>
  <Route path="/contact">
    <Contact />
    </Route>
  <Route path="/portfolio">
    <Portfolio />
    </Route>
    <Route path="/">
    <About />
    </Route>
  </Switch>

</div>
    
  );
}

export default App;
