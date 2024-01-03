import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';


const App = () => {

  return (
    <div className='App'>
      <h1>CRUD App Using TypeScript</h1>

      <h2>Add Post Title</h2>
      <input type="text" />
      <h2>Add Post Description</h2>
      <input type="text" />
      <h2>Add Post Author</h2>
      <input type="text" />
      <h2>Is Post Published ?</h2>
      <input type="checkbox" name="published" id="published" />
      <button >Add Post</button>

      <h2>POSTS</h2>

    </div>
  )
}

export default App
