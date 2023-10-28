import React, { useState, useEffect } from "react";
import Header from "../main/Header";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsData = JSON.parse(localStorage.getItem("post"));
    if (postsData) {
      setPosts([postsData]);
    }
  }, []);

  return (
    <div>
        <Header />
        <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}
