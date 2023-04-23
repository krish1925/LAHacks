import React, { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "../components/Nav";

function ViewProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users');
        setUsers(response.data);
      } catch(error) {
        console.log(error)
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      <Nav />
      {users.map(user => (
        <div key={user._id} className="profile">
          <h1>{user.Name}</h1>
          <img src={user.url} alt="profile picture" />
          <p> ({user.Pronouns}) </p>
          <p><b>About Me:</b> {user.about}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewProfile;
