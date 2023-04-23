import "./Homepage.css"
import React, { useState } from "react";
import Nav from "../components/Nav";
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/feed", { state: { location: inputValue } });
  };
  
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      {/* <Nav /> */}
      <div class="homepage">
        <div class="fade-in-text">
          <h1>Explorely</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="   Search destinations" 
            value={inputValue}
            onChange={onChangeHandler}
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
