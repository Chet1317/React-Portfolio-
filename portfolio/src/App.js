import React from 'react';
import './App.css';
import "./index.css";
import Container from "react-bootstrap/Container";
import {
  Switch,
  Route
} from "react-router-dom";

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
        <a style={{fontFamily:"Saira Stencil One",fontSize:"30px", color: "teal"}} class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a style={{fontFamily:"Saira Stencil One", fontSize:"30px", color: "teal"}} class="nav-link" href="#">Portfolio</a>
      </li>
      <li class="nav-item">
        <a style={{fontFamily:"Saira Stencil One",fontSize:"30px", color: "teal"}} class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <div class="row">
    <div class="col-sm-3">
    <h1 class="display-4">Full Stack Developer</h1>
    <p class="lead">I am a Full Stack Web Developer in the Toronto area.</p>
    <p class="lead">Check out the link to my Portfolio.</p>
  </div>
  </div>
</div>
</div>

<Container>
  <Switch>
    <Route path="./about">
    <About />
    </Route>
  </Switch>
</Container>
</div>
    
  );
}

export default App;
