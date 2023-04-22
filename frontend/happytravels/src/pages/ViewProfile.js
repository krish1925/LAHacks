import React from "react";
import Nav from "../components/Nav";

function ViewProfile() {
    return (
    <div>
        <Nav />
        <div class = "profile">
      <h1>Jane Doe</h1>
      <img src="https://placekitten.com/200/300" alt="profile picture" />
      <p> (she/her) </p>
      <p><b>About Me:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel justo turpis. Nam feugiat tellus massa, vel feugiat justo dignissim non. Nullam id purus mi. Nunc mollis purus vitae ante ultrices commodo. Sed vel enim tincidunt, hendrerit leo sit amet, viverra mauris. </p>
      </div>
      </div>
  );
}
 
  
export default ViewProfile ;