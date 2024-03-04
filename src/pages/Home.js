import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";

const Home = () => {
  const [posts, setPost] = useState([]);

  const wordPressSiteURl = "http://localhost/wp";

  const getPosts = async () => {
    const res =await axios.get(`${wordPressSiteURl}/wp-json/wp/v2/posts`);
    setPost(res?.data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Layout>
      <div>Home page</div>
      {posts?.length ? (
        <div>
          <h2 className="text-center mb-3">Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="card mb-3 border-dark mx-2 p-3">
              <h4>{post.title.rendered}</h4>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default Home;
