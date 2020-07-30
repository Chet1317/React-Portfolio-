import React from 'react';
import './App.css';
import "./index.css"

function App() {
  return (
    <div className="App">
      
   <nav className="navbar navbar-expand-lg navbar-light">
  <a style={{fontVariant:"small-caps", fontSize:"50px", color: "white"}} class="navbar-brand">Chet Martin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li style={{ marginLeft:"600px"}}  class="nav-item active">
        <a style={{fontSize:"30px", color: "white"}} class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a style={{fontSize:"30px", color: "white"}} class="nav-link" href="#">Portfolio</a>
      </li>
      <li class="nav-item">
        <a style={{fontSize:"30px", color: "white"}} class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Chet Martin</h1>
    <p class="lead">Full Stack Developer</p>
  </div>
</div>
</div>
    
  );
}

export default App;
