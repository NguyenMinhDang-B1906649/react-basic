import React, { useState } from "react";
import axios from "axios";
function AddNewBlog({ submitData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("title invalid");
      return;
    }
    if (!content) {
      alert("content invalid");
      return;
    }
    let data = {
      title: title,
      body: content,
      userId: 1,
    };
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    submitData(res.data);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <div className="input-group">
          <label htmlFor="">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Content:</label>
          <input
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default AddNewBlog;
