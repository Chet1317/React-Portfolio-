import React from "react"

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
const Cards = () => {
    return(
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="(https://user-images.githubusercontent.com/63617922/89052032-17830500-d323-11ea-8b85-be0e4f97664d.png)" alt="Card image cap"></img>
            <div class="card-body">
            <p class="card-text">This Burger generating app was created with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; Node and MySQL were used to query and route the data and Handlebars were use to generate HTML.</p>
            </div>
        </div>
 
    )
}

export default Cards 