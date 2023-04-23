import "./Homepage.css"
import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from 'axios'
import apiClient from '../apiClient'
import {useNavigate} from 'react-router-dom'

function Homepage() {
  const [inputValue, setInputValue] = useState("");
  let navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("submitted");
  
    try {
      const response = await axios.post("http://localhost:8000/location");
      const success = response.status === 200;
      if (success) navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  };
  
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
            <form onSubmit={handleSubmit}>
        {/* <input type="text" placeholder="Search..." onChange={onChangeHandler} value={inputValue}></input> */}
        <input type="text" placeholder="   Search destinations" 
          onChange={onChangeHandler} 
          value={inputValue}
        ></input>
              <button type="submit">Go</button>
              </form>
        </div>  
        
    </div>
  );
}
  
  
export default Homepage;