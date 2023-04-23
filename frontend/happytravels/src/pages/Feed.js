import "./Feed.css"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "../components/Nav";
import LikeButton from "../components/LikeButton";

function Feed() {
  const [posts, setPosts] = useState([]);


    ];    return (
        <div class ="whole-page">
            <Nav></Nav>
          <div class = "body">
            <h1> Feed </h1>
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <div className="heading">
                  <h5 className="card-title"> <b> {item.username} </b> </h5> 
                  <h5 className="place">{item.location}</h5>
                  <h5 className="time">{item.time_posted}</h5>

                </div>
                
                <div>
                <img
                    src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andrei-tanase-1271619.jpg&fm=jpg"
                    alt="placeholder"
                    className="feed-image"/>
                </div>
                <p className="card-text">{item.caption}</p>
                <LikeButton></LikeButton>
              </div>
            </div>
          ))}
        </div>
        </div>
      );
  }
  
  export default Feed;
  
  
