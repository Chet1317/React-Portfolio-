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
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://still-woodland-95915.herokuapp.com/">Eat-Da-Burger</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://afternoon-thicket-64187.herokuapp.com/">Note Taker</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>This application can be used to write, save, and delete notes. It uses an Express backend that saves and retrieves note data from a JSON file. Keep track of your workouts, grocery lists or anything you want with this application.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://chet1317.github.io/Server-Side-APIs-Weather-Dashboard/">Weather App</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>Using OpenWeather.com API's, this application retrieves a five day weather forecast for any city you wish to search. It also inculdes the humidity perecentage, UVI and wind speed. It's the perefect app if you want to search the weather for an upcoming trip.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://lit-badlands-54539.herokuapp.com/">Me My Chef and I</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>"Me MyChef & I" is web application uses API'S from spoonacular.com. To get started, users simply click on the "Check Your Fridge" icon. From there, you can view, add or remove food from your fridge. Once your fridge is up to date, click on the "Find Recipe" icon and recipes from spoonacular appear for the user, based on the updated fridge.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://wesycool.github.io/Project1-Edmund/Project1-Shayanne/">nutShell</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>A mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space. This app removes need for multiple applications and the flood of irrelevant information people are often bombarded with.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://chet1317.github.io/Web-APIs-Code-Quiz/">Code Quiz</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>Code quiz is a fun little app that quizes the user JavaScript. The timer is set at 200 seconds, when the start button is pressed, the user is presented with a question. If the user answers incorrectly, time is stripped away from the clock. A final score is presented at the end. </p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://fathomless-falls-34734.herokuapp.com/">Budget Tracker</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>The user is able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, both are populate to the total when brought back online. Great for an avid taveller who needs to track withdrawals/deposits with or without a connection.</p>
                        </div>
                        <div class="col-sm-3">
                            <a style={{ backgroundColor: "#0d0e0ea6", color: "#de9220", fontFamily: "permanent marker" }} href="https://docs.google.com/document/d/1umUggTq-4QUxWM_Ehr8yJDAexi4vxwrCPW9o7cFrpyc/edit?usp=sharing">Resume</a>
                            <p class="card-text" style={{ backgroundColor: "rgb(8 8 46 / 0.75)", color: "lightblue" }}>Find my Resume here.</p>
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