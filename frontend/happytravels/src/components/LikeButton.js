import React, { useState } from 'react';
import "./LikeButton.css"

const LikeButton = () => {
  const [likes, setLikes] = useState(10);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={`like-button ${isClicked && 'liked'}`} onClick={handleClick}>
      <span className="likes-counter">{ ' ♥ ' }</span>
      <span className="likes">{ likes }</span>
    </button>

  );
};

export default LikeButton;