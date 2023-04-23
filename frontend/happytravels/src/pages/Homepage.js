import "./Homepage.css"
import React, { useState } from "react";
import Nav from "../components/Nav";

import apiClient from '../apiClient'

function Homepage() {
  const [inputValue, setInputValue] = useState("");

  const  onChangeHandler = async (e) => {
    setInputValue(e.target.value);
    const res = await apiClient.getMapSuggestions(e.target.value);
    // console.log(res);
  }


  return (
    <div>
        <Nav />
        <div class = "homepage">
          <div class = "fade-in-text">
            <h1>Wanderlust</h1>
            </div>
        {/* <input type="text" placeholder="Search..." onChange={onChangeHandler} value={inputValue}></input> */}
        <input type="text" placeholder="   Search destinations" 
          onChange={onChangeHandler} 
          value={inputValue}
        ></input>
              <button type="submit">Go</button>
        </div>  
    </div>
  );
}
  
  
export default Homepage;