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
        <div style={{ margin: '20% 35%' }}>
            <h1>Search, Explore </h1>
        {/* <input type="text" placeholder="Search..." onChange={onChangeHandler} value={inputValue}></input> */}
        <input type="text" placeholder="Search..." 
          onChange={onChangeHandler} 
          value={inputValue}
        ></input>
              <button type="submit">Search</button>
        </div>  
    </div>
  );
}
  
  
export default Homepage;