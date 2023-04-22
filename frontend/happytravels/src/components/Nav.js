import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/recommendations" className="nav-link">
            Recommendations
          </Link>
        </li>
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
      </ul>
    </div>
  );
}

export default Nav;
