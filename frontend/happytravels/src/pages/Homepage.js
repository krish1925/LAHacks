import React from "react";
import "./Homepage.css"
import Nav from "../components/Nav";

function Homepage() {
    return (
      <div class = "homepage">
          <Nav />
          <div class = "center-stuff"> 
              <h1>Explore</h1>
                <input type="text" placeholder="Search for a destination..."></input>
                <button type="submit">Go</button>
                <button type="random"> Take Me Anywhere</button>
                </div>
          </div>  
    );
}
  
  
export default Homepage;