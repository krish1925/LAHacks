import React from "react";
import Nav from "../components/Nav";

function Recommendations() {
    const data = [
        {
          title: "Post 1",
          content: "Join us for an exciting scuba-diving adventure in the beautiful waters of Los Angeles!",
        },
        {
          title: "Post 2",
          content: "Come experience the thrill of freefalling through the sky at our skydiving event in Los Angeles! Located just outside the city, our drop zone offers breathtaking views of the surrounding area as you jump from the plane at over 10,000 feet.",
        },
        {
          title: "Post 3",
          content: "Come join us for a breathtaking hiking adventure in the stunning mountains of Los Angeles! Our guided hike will take you through scenic trails, where you'll be able to soak up the beautiful views of the surrounding landscapes.",
        },
      ];    return (
  
          
          <div >
              <Nav></Nav>
            {data.map((item, index) => (
              <div key={index} className="card">
                <div className="card-body">
                    <div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                  </div>
                  <div>
                  <img
                      src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andrei-tanase-1271619.jpg&fm=jpg"
                      alt="placeholder"
                      className="feed-image"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
    
  
  
export default Recommendations;