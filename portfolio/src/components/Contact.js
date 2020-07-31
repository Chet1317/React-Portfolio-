import React from "react"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
const Contact = () => {
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

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <div class="row">
    <div class="col-sm-3">
    <h1 class="display-4">Contact</h1>
   
    <label style={{color:"#de9220",fontFamily:"permanent marker"}}>Name</label>
            <p style={{color:"lightblue"}}>Chet Martin</p>
            
        <label style={{color:"#de9220",fontFamily:"permanent marker"}}>Email</label>
        <p style={{color:"lightblue"}}>c.chetmartin@gmail.com</p>
            
        {/* <label style={{color:"#de9220",fontFamily:"permanent marker"}}>Phone</label>
        <p style={{color:"lightblue"}}>905-259-1674</p>
            */}
          
        
     
  </div>
</div>
</div>
        </div>
        </div>
    )
}

export default Contact