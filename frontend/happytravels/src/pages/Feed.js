import React from "react";
import Nav from "../components/Nav";


function Feed() {
    const data = [
      {
        username: "user 1",
        location: "Los Angeles, CA",
        time_posted: "36m",
        caption: "Join us for an exciting scuba-diving adventure in the beautiful waters of Los Angeles! Explore the vibrant and diverse marine life, swim with schools of colorful fish, and discover hidden treasures beneath the waves. Our experienced instructors will guide you through every step of the way, ensuring a safe and unforgettable experience. Suitable for both beginners and experienced divers, this event is perfect for anyone looking to get up close and personal with the wonders of the ocean. Don't miss out on this amazing opportunity to discover the beauty and thrill of scuba-diving in LA!",
      },
      {
        title: "user 2",
        location: "Los Angeles, CA",
        time_posted: "36m",
        caption: "Come experience the thrill of freefalling through the sky at our skydiving event in Los Angeles! Located just outside the city, our drop zone offers breathtaking views of the surrounding area as you jump from the plane at over 10,000 feet. You'll be harnessed to an experienced instructor who will guide you through every step of the process, from the exhilarating freefall to the peaceful parachute ride back to the ground. No prior experience is necessary, as our team of certified professionals will provide all the training and equipment you need to make your jump safely. Don't miss out on this unforgettable adventure!",
      },
      {
        title: "user 3",
        location: "Los Angeles, CA",
        time_posted: "36m",
        caption: "Come join us for a breathtaking hiking adventure in the stunning mountains of Los Angeles! Our guided hike will take you through scenic trails, where you'll be able to soak up the beautiful views of the surrounding landscapes. We will provide you with the necessary gear and safety equipment, and our experienced guides will ensure that you have a safe and enjoyable experience. Whether you're a seasoned hiker or a beginner, this event is perfect for anyone looking to get outdoors and explore the natural beauty of LA. Don't miss out on this unforgettable hiking experience!",
      },


    ];    return (
        <div >
            <Nav></Nav>
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <div className="heading">
                  <h5 className="card-title"> <b> {item.title} </b> </h5>
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
              </div>
            </div>
          ))}
        </div>
      );
  }
  
  export default Feed;
  
  
