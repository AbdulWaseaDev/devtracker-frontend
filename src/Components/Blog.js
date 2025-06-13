import React from 'react';

// Sample blog data (can be expanded)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "React is a powerful JavaScript library for building user interfaces. It's component-based and helps developers build scalable front-end applications with ease.",
    image: "./images/react starting.png",
  },
  {
    id: 2,
    title: "Why Use React Router?",
    content: "React Router enables dynamic routing in a React app. It keeps your UI in sync with the URL, allowing smooth page transitions without full-page reloads.",
    image: "/images/react-router.jpg",
  },
  {
    id: 3,
    title: "Understanding JSX in React",
    content: "JSX is a syntax extension that allows writing HTML-like code inside JavaScript. It makes your React code more readable and easier to write.",
    image: "/images/jsx.jpg",
  },
];

const Blog = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>My Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} style={styles.card}>
          <img src={post.image} alt={post.title} style={styles.image} />
          <h2 style={styles.title}>{post.title}</h2>
          <p style={styles.content}>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

// Inline styles (or you can convert them to CSS)
const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#f3f4f6',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  mainTitle: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '20px',
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '12px',
  },
  title: {
    fontSize: '22px',
    color: '#111827',
    marginBottom: '10px',
  },
  content: {
    fontSize: '16px',
    color: '#374151',
  },
};

export default Blog;
