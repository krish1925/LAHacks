import React, { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "../components/Nav";
import LikeButton from "../components/LikeButton";

function Safety() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/posts');
        setPosts(response.data);
      } catch(error) {
        console.log(error)
      }
    }
    getPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post => post.formData.category === 'Safety/Tips');
    setFilteredPosts(filtered);
  }, [posts]);

  return (
    <div class="whole-body">
      <Nav />
      <div class = "body">
      <h1> Safety </h1>
      <div class = "post-card">
      {filteredPosts.map(post => (
        <div key={post._id} className="card">
          <h2> <span style={{ fontWeight: 'bold', fontSize: '30px' }}>{post.formData.username}</span> {' • '} <span style={{ color: '#999' , fontSize: '20px'}}>{post.formData.location}</span> </h2>
          <div class="content">
          <img src={post.formData.img} alt="post picture"  />
          <p><b></b> {post.formData.caption}</p>
          </div>
          <LikeButton></LikeButton>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Safety;
