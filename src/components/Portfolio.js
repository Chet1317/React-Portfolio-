import React from "react"

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
                <a style={{ fontFamily: "Permanent Marker", fontVariant: "small-caps", fontSize: "30px", color: "Orange" }} class="navbar-brand">Chet Martin</a>
                <button style={{color: "Orange", borderColor:"orange"}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
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
                        {/* <div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "lime", fontFamily: "permanent marker" }} href="https://still-woodland-95915.herokuapp.com/">"click"</a>
  <img src="https://user-images.githubusercontent.com/63617922/89857726-d54f9400-db6a-11ea-8356-c0aa83835f6f.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"#0000008e"}}>
    <p style={{ color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">EAT-DA-BURGER is a burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
  </div>
</div>
</div> */}
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://afternoon-thicket-64187.herokuapp.com/">Note Taker</a>
  <img src="https://user-images.githubusercontent.com/63617922/89304640-aa7db100-d63b-11ea-8439-af3729246a07.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"#0000009b"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">This application can be used to write, save and delete notes. It uses an Express backend to GET, POST and DELETE retrieved api data from a JSON file.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://chet1317.github.io/Server-Side-APIs-Weather-Dashboard/">Weather App</a>
  <img src="https://user-images.githubusercontent.com/63617922/89857477-3460d900-db6a-11ea-80d1-5099a5ecedb1.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"#0000008e"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">Using OpenWeather.com API's, this application retrieves a five day weather forecast for any city you wish to search. HTML, CSS and JavaScript were all used to create the design and functionality of this responsive website.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://lit-badlands-54539.herokuapp.com/">Me My Chef and I</a>
  <img src="https://user-images.githubusercontent.com/63617922/89603462-2ee85380-d837-11ea-885f-e892dd16708d.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"#0000008e"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">"Me MyChef & I" is a web application that uses API'S from spoonacular.com. This application uses Node and Express server's, Handlebars, a MySQL database with a Sequelize ORM, both GET and POST routes and is deployed on Heroku.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }}href="https://wesycool.github.io/Project1-Edmund/Project1-Shayanne/">nutShell</a>
  <img src="https://user-images.githubusercontent.com/63617922/89603847-f6954500-d837-11ea-87d4-ddd41adf7ae4.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"#0000008e"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">A mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space. This application is interactive, uses server-side and third-party API's, CSS frameworks and HTML.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://chet1317.github.io/Web-APIs-Code-Quiz/">Code Quiz</a>
  <img src="https://user-images.githubusercontent.com/63617922/89604438-46c0d700-d839-11ea-86d4-cbb73ce87e49.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"#0000008e"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">Code quiz is a fun little app that quizes the user in JavaScript. It features a dynamically updated HTML and CSS powered by JavaScript code. As well as a clean and polished responsive user interface, adapting to multiple screen sizes. </p>
  </div>
</div>
</div>
<div class="col-md-4">
<div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://chet1317.github.io/Web-APIs-Code-Quiz/">Bookify</a>
  <img src="https://user-images.githubusercontent.com/63617922/89940733-fa361c80-dbe7-11ea-8df3-78be989b8029.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"#0000008e"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">Bookify is a convenient web application designed to allow users to research and discover the ideal venue for whatever they are looking for. This app was created with MERN Stack technologies; MongoDB, Express, React and Node as well as HTML and CSS. </p>
  </div>
</div>
</div>

                    </div>
                </div>
           
            <footer>
                <p style={{ color: "#de9220", textAlign: "center", fontFamily: "satisfy" }}>(c) Chet Martin</p>
            </footer>
        </div>
        </div>
        



    )
}

export default Portfolio 