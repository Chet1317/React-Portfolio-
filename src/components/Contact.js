import React from "react"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a style={{ fontFamily: "Permanent Marker", fontVariant: "small-caps", fontSize: "30px", color: "Orange" }} class="navbar-brand">Chet Martin</a>
        <button style={{color: "Orange", borderColor:"orange"}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li  class="nav-item active">
              <a style={{ fontFamily: "Saira Stencil One", fontSize: "25px", color: "teal" }} class="nav-link" href="#"> <Link to="/">About</Link><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a style={{ fontFamily: "Saira Stencil One", fontSize: "25px", color: "teal" }} class="nav-link" href="#"> <Link to="/portfolio">Portfolio</Link></a>
            </li>
            <li class="nav-item">
              <a style={{ fontFamily: "Saira Stencil One", fontSize: "25px", color: "teal" }} class="nav-link" href="#"> <Link to="/contact">Contact</Link></a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <h1 class="display-4">Contact</h1>

              <label style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }}>Name</label>
              <p style={{ backgroundColor: "#0d0e0ea6", color: "lightblue" }}>Chet Martin</p>

              <label style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }}>Email</label>
              <p style={{ backgroundColor: "#0d0e0ea6", color: "lightblue" }}>c.chetmartin@gmail.com</p>

              <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://www.linkedin.com/in/chet-martin-85891a17b/">LinkedIn</a>
              <p style={{ backgroundColor: "#0d0e0ea6", color:"lightblue"}}>linkedIn</p>

              <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://github.com/Chet1317">Github</a>
              <p style={{ backgroundColor: "#0d0e0ea6", color:"lightblue"}}>Github Page</p>

              <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://drive.google.com/file/d/105Rp62Z-NUPunh9xNqBNrxS8vBUAdugq/view?usp=sharing">Resume</a>
              <p style={{ backgroundColor: "#0d0e0ea6", color:"lightblue"}}>Resume</p>

                  

            </div>
          </div>
        </div>
      </div>
      <footer>
        <p style={{ textAlign: "center", fontFamily: "satisfy" }}>(c) Chet Martin</p>
      </footer>
    </div>
  )
}

export default Contact