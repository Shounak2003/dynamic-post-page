// src/App.js
import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Post Page with OG Image Generation</h1>
      </header>
      <main>
        <Post />
      </main>
    </div>
  );
}

export default App;
