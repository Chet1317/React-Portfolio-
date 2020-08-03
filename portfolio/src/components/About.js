import React from "react"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
const About = () => {
    return(
        <div>
                 <nav className="navbar navbar-expand-lg navbar-light">
  <a style={{fontFamily:"Permanent Marker", fontVariant:"small-caps", fontSize:"50px", color: "Orange"}} class="navbar-brand">Chet Martin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li style={{ marginLeft:"600px"}}  class="nav-item active">
        <a style={{fontFamily:"Saira Stencil One",fontSize:"30px"}} class="nav-link"> <Link to ="/">About</Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a style={{fontFamily:"Saira Stencil One", fontSize:"30px"}} class="nav-link" href="#"> <Link to ="/portfolio">Portfolio</Link></a>
      </li>
      <li class="nav-item">
        <a style={{fontFamily:"Saira Stencil One",fontSize:"30px"}} class="nav-link" href="#"> <Link to="/contact">Contact</Link></a>
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
    <p class="lead">With a wide range of skills and experience in fields such as; Electrical, Fitness and Firefighter.</p>
    <p class="lead">I love hard work, am always eager to learn and have a passion for being creative. </p>
    <p class="lead">Check out the link to my Portfolio.</p>
  </div>
  </div>
</div>
</div>
<footer>
  <p style={{textAlign:"center", fontFamily:"satisfy"}}>(c) Chet Martin</p>
</footer>
        </div>
    )
}

export default About 