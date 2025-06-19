import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/devto/feed", { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.toString());
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Aggregated Dev.to Blogs</h1>
      {posts.map((post) => (
        <div key={post.id} style={styles.card}>
          {post.cover_image && (
            <img src={post.cover_image} alt={post.title} style={styles.image} />
          )}
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            <h2 style={styles.title}>{post.title}</h2>
          </a>
          <p style={styles.meta}>
            by <strong>{post.source}</strong> on{" "}
            {new Date(post.published_at).toLocaleDateString()}
          </p>
          <p style={styles.content}>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f3f4f6",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  mainTitle: {
    gridColumn: "1 / -1",
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
  },
  title: { fontSize: "22px", marginBottom: "8px" },
  meta: { fontSize: "14px", color: "#6b7280", marginBottom: "12px" },
  content: { fontSize: "16px", color: "#374151" },
};

export default Blog;
