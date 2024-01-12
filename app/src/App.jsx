import React, { useState, useEffect } from "react";
import Posts from "./Components/Posts";
import { WindowVirtualizer as WVList } from "virtua";
import Navbar from "./Components/Navbar";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const slicePosts = posts.slice(0, 40);

  useEffect(() => {
    setPost(slicePosts);
  }, [posts]);

  return (
    <div className="max-w-2xl m-auto flex flex-col gap-2 p-4">
      <Navbar data="Miyav!!!" />
      <WVList
        onRangeChange={(start, end) => {
          if (end + 1 === post.length) {
            setPost((prev) => [...prev, ...post]);
          }
        }}
      >
        {post.map((item, index) => (
          <Posts img={item.url} title={item.title} key={index} />
        ))}
      </WVList>
    </div>
  );
}

export default App;
