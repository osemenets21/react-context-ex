import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  // Add other post fields if needed
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const apiURL = 'https://dummyjson.com/posts';

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(apiURL);
        if (response.ok) {
          const { posts } = await response.json();
          setPosts(posts);
          console.log(posts);
          
        } else {
          console.error('Error fetching posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  const deletePost = async (postId: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const deleteResponse = await fetch(`https://dummyjson.com/posts/${postId}`, {
          method: 'DELETE',
        });

        if (deleteResponse.ok) {
          // Deletion successful, update the list of posts
          setPosts(posts.filter(post => post.id !== postId));
        } else {
          console.error('Error deleting the post');
        }
      } catch (error) {
        console.error('Error deleting the post:', error);
      }
    }
  };

  return (
    <ul>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button
              className="delete-post"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <li>No posts available</li>
      )}
    </ul>
  );
};

export default PostsList;
