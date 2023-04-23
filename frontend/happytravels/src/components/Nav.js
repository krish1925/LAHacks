import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Nav() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
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

        {cookies.AuthToken ? null : <li className="nav-item">
          <Link to="/OnBoarding" className="nav-link">
            OnBoarding
          </Link>
        </li>}
        {cookies.AuthToken ? null : <li className="nav-item">
          <Link to="/loginpage" className="nav-link">
            Login
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Nav;
