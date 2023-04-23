import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useCookies } from 'react-cookie';
import "./Nav.css"
import apiClient from "../apiClient";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // perform logout action here
    apiClient.setToken(null)
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/recommendations" className="nav-link">
            Recommendations
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/Itinenary" className="nav-link">
            Itinerary
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/feed" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/safety" className="nav-link">
            Safety
          </Link>
        </li>
      {isLoggedIn ? (
         <>  
            <li className="nav-item">
              <Link to="/post" className="nav-link">
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ViewProfile" className="nav-link">
                View Profile
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </li>
        </>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <li className="nav-item1">
          <Link to="/Posts" className="nav-link" style={{ position: 'absolute', right: 0 }}>
            Create Post
          </Link>
        </li>
        </div>
        )}
      </ul>
    </div>
  );
}

export default Nav;
