import React from "react"
// import './App.css';
// import "./index.css";
// import "./App.js"
// import "./eat Da.png"
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

const Portfolio = () => {
    return (
   
     
     <div>
      
            <nav className="navbar navbar-expand-lg navbar-light">
                <a style={{ fontFamily: "Permanent Marker", fontVariant: "small-caps", fontSize: "50px", color: "Orange" }} class="navbar-brand">Chet Martin</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li style={{ marginLeft: "600px" }} class="nav-item active">
                            <a style={{ fontFamily: "Saira Stencil One", fontSize: "30px", color: "teal" }} class="nav-link" href="#"> <Link to="/">About</Link><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a style={{ fontFamily: "Saira Stencil One", fontSize: "30px", color: "teal" }} class="nav-link" href="#"> <Link to="/portfolio">Portfolio</Link></a>
                        </li>
                        <li class="nav-item">
                            <a style={{ fontFamily: "Saira Stencil One", fontSize: "30px", color: "teal" }} class="nav-link" href="#"> <Link to="/contact">Contact</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
           

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div class="row">
                    <div class="col-sm-3">
                            <a style={{color:"#de9220",fontFamily:"permanent marker"}} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color:"lightblue"}}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{color:"#de9220",fontFamily:"permanent marker"}} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color:"lightblue"}}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{color:"#de9220",fontFamily:"permanent marker"}} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color:"lightblue"}}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{color:"#de9220",fontFamily:"permanent marker"}} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color:"lightblue"}}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{color:"#de9220",fontFamily:"permanent marker"}} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color:"lightblue"}}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{color:"#de9220",fontFamily:"permanent marker"}} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color:"lightblue"}}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{color:"#de9220",fontFamily:"permanent marker"}} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color:"lightblue"}}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
   
           
    )
}

export default Portfolio 