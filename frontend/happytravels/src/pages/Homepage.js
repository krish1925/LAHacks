import React from "react";
import Nav from "../components/Nav";

function Homepage() {
    return (
      <div>
          <Nav />
          <div style={{ margin: '20% 35%' }}>
              <h1>Search, Explore </h1>
                <input type="text" placeholder="Search..."></input>
                <button type="submit">Search</button>
          </div>  
      </div>
    );
  }
  
  
export default Homepage;