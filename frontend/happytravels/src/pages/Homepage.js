import "./Homepage.css"
import React, { useState } from "react";
import Nav from "../components/Nav";
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState ({
    // user_id: cookies.UserId,
    category: ''
})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.category === 'Feed') {
      navigate("/feed", { state: { location: inputValue } });
    }
    if (formData.category === 'Itinerary') {
      navigate("/Itinenary", { state: { location: inputValue } });
    }
    if (formData.category === 'Safety/Tips') {
      navigate("/safety", { state: { location: inputValue } });
    }
  };
  
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  function handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
     
    setFormData ((prevState) => ({
      ...prevState,
      [name] : value
  }))
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

          <br />
          <label>Category</label>
          <div className="multiple-input-container">
              <input 
                  id="feed"
                  type="radio"
                  name="category"
                  value="Feed"
                  onChange={handleChange}
                  checked={formData.category === 'Feed'}
              />
                <label htmlFor="itinerary-category" style={{ marginLeft: '10px' }}>Feed</label>
              <br />
              <input 
                  id="itinerary"
                  type="radio"
                  name="category"
                  value="Itinerary"
                  onChange={handleChange}
                  checked={formData.category === 'Itinerary'}
              />
              <label htmlFor="itinerary-category" style={{ marginLeft: '10px' }}>Itinerary</label>
              <br />
              <input 
                  id="safety"
                  type="radio"
                  name="category"
                  value="Safety/Tips"
                  onChange={handleChange}
                  checked={formData.category === 'Safety/Tips'}
              />
                <label htmlFor="itinerary-category" style={{ marginLeft: '10px' }}>Safety</label>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Homepage;
