import React, { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "../components/Nav";
import LikeButton from "../components/LikeButton";
import { useLocation } from "react-router-dom";

function Safety() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filtered_cats, setFilteredCatPosts] = useState([]);
  const loc = useLocation();

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
    if (loc.state && loc.state.location) {
      const filteredPosts = posts.filter(post => post.formData.location === loc.state.location);
      setFilteredPosts(filteredPosts);
      const filtered_cats = filteredPosts.filter(post => post.formData.category === 'Itinerary');
      setFilteredCatPosts(filtered_cats);

    } else {
      setFilteredPosts(posts);
      const filtered_cats = filteredPosts.filter(post => post.formData.category === 'Itinerary');
      setFilteredCatPosts(filtered_cats);
    }
  }, [posts, loc]);

  // useEffect(() => {
  //   const filtered = posts.filter(post => post.formData.category === 'Itinerary');
  //   setFilteredPosts(filtered);
  // }, [posts]);

  return (
    <div class="whole-body">
      <Nav />
      <div class = "body">
      <h1> Itinerary </h1>
      <div class = "post-card">
      {filtered_cats.map(post => (
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
