import React, { useState } from 'react';

const NewPost = () => {
  const [title, setTitle] = useState('');

  const handleAddPost = () => {
    if (title.trim() === '') {
      alert('Please enter a title for the post.');
      return;
    }

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        userId: 5,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setTitle('');
        console.log('New post added:', data);
      })
      .catch(error => {
        console.error('Error adding the post:', error);
      });
  };

  return (
    <div>
      <h3>New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddPost}>Add</button>
    </div>
  );
};

export default NewPost;
