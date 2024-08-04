// src/Post.js
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { generateOgImage } from './OGImageGenerator';
import './Post.css';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [ogImageUrl, setOgImageUrl] = useState('');
  const postRef = useRef();

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleGenerateOgImage = async () => {
    const dataUrl = await generateOgImage(postRef.current);
    setOgImageUrl(dataUrl);
  };

  return (
    <div className="post-container">
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={ogImageUrl} />
      </Helmet>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" />}
      <div className="post-preview" ref={postRef}>
        <h1>{title}</h1>
        <p>{content}</p>
        {image && <img src={image} alt="Post" />}
      </div>
      <button onClick={handleGenerateOgImage}>Generate OG Image</button>
    </div>
  );
};

export default Post;
