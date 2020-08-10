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
                <a style={{ fontFamily: "Permanent Marker", fontVariant: "small-caps", fontSize: "50px", color: "Orange" }} class="navbar-brand">Chet Martin</a>
                <button style={{color: "Orange", borderColor:"orange"}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
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
                        <div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "lime", fontFamily: "permanent marker" }} href="https://still-woodland-95915.herokuapp.com/">"click"</a>
  <img src="https://user-images.githubusercontent.com/63617922/89254065-39fb7380-d5ec-11ea-89db-52a3b142c08a.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"rgb(8, 8, 46, 0.70)"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">EAT-DA-BURGER is a burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://afternoon-thicket-64187.herokuapp.com/">Note Taker</a>
  <img src="https://user-images.githubusercontent.com/63617922/89304640-aa7db100-d63b-11ea-8439-af3729246a07.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"rgb(8, 8, 46, 0.70)"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">This application can be used to write, save, and delete notes. It uses an Express backend that saves and retrieves note data from a JSON file. Keep track of your workouts, grocery lists or anything you want with this application.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://chet1317.github.io/Server-Side-APIs-Weather-Dashboard/">Weather App</a>
  <img src="https://user-images.githubusercontent.com/63617922/89602907-d5cbf000-d835-11ea-83de-80bb3704bec0.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"rgb(8, 8, 46, 0.70)"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">Using OpenWeather.com API's, this application retrieves a five day weather forecast for any city you wish to search. It also inculdes the humidity perecentage, UVI and wind speed. It's the perefect app if you want to search the weather for an upcoming trip.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://lit-badlands-54539.herokuapp.com/">Me My Chef and I</a>
  <img src="https://user-images.githubusercontent.com/63617922/89603462-2ee85380-d837-11ea-885f-e892dd16708d.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"rgb(8, 8, 46, 0.70)"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">"Me MyChef & I" is web application uses API'S from spoonacular.com. Simply click on the "Check Your Fridge" icon and you can view, add or remove food from your fridge. Update your fridge and click on the "Find Recipe" icon. Recipes will appear based on the updated fridge.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }}href="https://wesycool.github.io/Project1-Edmund/Project1-Shayanne/">nutShell</a>
  <img src="https://user-images.githubusercontent.com/63617922/89603847-f6954500-d837-11ea-87d4-ddd41adf7ae4.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"rgb(8, 8, 46, 0.70)"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">A mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space. This app removes need for multiple applications and the flood of irrelevant information people are often bombarded with.</p>
  </div>
</div>
</div>
<div class="col-md-4">
                    <div >
                    <a style={{backgroundColor: "#000000b3", color: "#de9220", fontFamily: "permanent marker" }} href="https://chet1317.github.io/Web-APIs-Code-Quiz/">Code Quiz</a>
  <img src="https://user-images.githubusercontent.com/63617922/89604438-46c0d700-d839-11ea-86d4-cbb73ce87e49.png" class="card-img-top" alt="..."></img>
  <div  style={{backgroundColor:"rgb(8, 8, 46, 0.70)"}}>
    <p style={{color:"lightblue", fontFamily:"roboto", fontSize:"14px"}} class="card-text">Code quiz is a fun little app that quizes the user JavaScript. The timer is set at 200 seconds, when the start button is pressed, the user is presented with a question. If the user answers incorrectly, time is stripped away from the clock. A final score is presented at the end. </p>
  </div>
</div>
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

export default Portfolio 