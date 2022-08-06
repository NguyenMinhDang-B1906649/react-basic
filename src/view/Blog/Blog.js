import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./blog.scss";
import { FaWindowClose } from "react-icons/fa";
import AddNewBlog from "./AddNewBlog";
function Blog() {
  const modal = useRef();
  const close = useRef();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let post = await axios.get("https://jsonplaceholder.typicode.com/posts");
      post = post.data.slice(0, 9);
      setPostData(post);
    }
    fetchData();
  }, []);
  useEffect(() => {
    let closeM = close.current;
    let closeModal = () => {
      modal.current.style.display = "none";
    };
    closeM.addEventListener("click", closeModal);
    return () => {
      console.log(1);
      closeM.removeEventListener("click", closeModal);
    };
  }, []);
  const handleAddBlog = () => {
    modal.current.style.display = "block";
  };
  const handleSubmitData = (data) => {
    setPostData((prev) => {
      data.id = data.id + Math.random();
      prev.unshift(data);
      return [...prev];
    });
    // setPostData([...postData, data]);
  };
  const handleDelete = (post) => {
    let newPosts = postData.filter((item) => {
      return item.id !== post.id;
    });
    setPostData(newPosts);
  };
  return (
    <>
      <h1 className="blog-title">Blog of me</h1>
      <div ref={modal} className="modal">
        <div className="modal-content">
          <span ref={close} className="close">
            &times;
          </span>
          <AddNewBlog submitData={handleSubmitData} />
        </div>
      </div>
      <button onClick={handleAddBlog}>Add new Blog</button>
      <div className="blog-container">
        {postData &&
          postData.length > 0 &&
          postData.map((post) => {
            return (
              <div key={post.id} className="blog-cart">
                <span className="blog-cart-title">{post.title}</span>
                <p className="blog-cart-body">{post.body}</p>
                <span className="X">
                  <FaWindowClose onClick={() => handleDelete(post)} />
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Blog;
