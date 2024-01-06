import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './App.css';
import axios from 'axios';

interface FormData {
  title: string;
  description: string;
  author: string;
  published: boolean; // Change the type to boolean
}

interface ChangeEventHandler<T = Element> {
  (event: ChangeEvent<T>): void;
}

interface FormEventHandler<T = Element> {
  (event: FormEvent<T>): void;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    author: '',
    published: false, // Set the initial value to false
  });

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement> = (
    e
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    // Adjust the logic for handling checkbox input
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const apiURL = 'http://localhost:7070/api/posts';

    try {
      await axios.post(apiURL, formData);
      console.log('Data Saved to DB');
      alert("Data Saved");
    } catch (error) {
      console.error('Error:', error);
      // Log the response to see the actual content
      alert("Error saving data");
    }

  };

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const apiURL = 'http://localhost:7070/api/posts/';

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='App'>
      <h1>CRUD App Using TypeScript</h1>
      <form onSubmit={handleSubmit}>
        <h2>Add Post Title</h2>
        <input type="text" name='title' value={formData.title} onChange={handleChange} />
        <h2>Add Post Description</h2>
        <textarea name='description' value={formData.description} onChange={handleChange} />
        <h2>Add Post Author</h2>
        <input type="text" name='author' value={formData.author} onChange={handleChange} />
        <h2>Is Post Published ?</h2>
        <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} />
        <br />
        <button type='submit'>Add Post</button>
        <br />
        <button >Update Post</button>
        <br />
        <button >Delete Post</button>
      </form>

      <h2>POSTS</h2>
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Author</th>
              <th>Published</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>{post.author}</td>
                <td>{post.published ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyForm;
