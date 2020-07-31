import React from 'react';
import './App.css';
import "./index.css";
import {
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      



  <Switch>
    <Route path="/">
    <About />
    </Route>
  </Switch>

</div>
    
  );
}

export default App;
