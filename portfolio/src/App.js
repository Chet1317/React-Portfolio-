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
