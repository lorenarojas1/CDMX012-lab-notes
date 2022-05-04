/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
// import { addDoc, collection } from "firebase/firestore";
// import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Navbar from './Navbar';

export default function CreatePostForm() {
  const [post, setPost] = useState({
    title: '',
    postText: '',
    date: '',
    userId: '',
  });

  const { createPost } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    setPost({ ...post, [name]: value });
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createPost(post.title, post.postText, post.date, post.userId);
      navigate('/dashboard');
    } catch (error) {
      if (error.code === 'auth/internal-error') {
        setError('Invalid email');
      }
      setError(error.message);
    }
  };

  return (
    <div className="createPostPage">
      {error && <p>{error}</p>}
      <Navbar />
      <div className="cpContainer">
        <div className="box-create">
          <p className="title-createPost">Create a Note</p>
          <div className="inputGp">
            <label> Title:</label>
            <input
              className="input-title"
              type="text"
              name="title"
              id="title"
              placeholder="Title..."
              onChange={handleChange}
            />
          </div>
          <div className="inputGp">
            <label> Description:</label>
            <textarea
              className="input-description"
              type="text"
              name="postText"
              id="postText"
              placeholder="Typing..."
              onChange={handleChange}
            />
          </div>
          <button className="btn-form" onClick={handleCreatePost}> Save Note</button>
        </div>
      </div>
    </div>
  );
}
