import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
   <nav className="navbar navbar-expand-lg navbar-light">
  <a style={{color: "rgb(212,240,89)"}} class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li style={{marginLeft:"900px"}}  class="nav-item active">
        <a style={{color: "rgb(212,240,89)"}} class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a style={{color: "rgb(212,240,89)"}} class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a style={{color: "rgb(212,240,89)"}} class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default App;
