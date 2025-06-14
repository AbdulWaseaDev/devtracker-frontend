// src/pages/Profile.jsx
import React from 'react';

function Profile() {
  const user = {
    name: "M. Nadeem",
    email: "nadeemgentleman786@gmail.com",
    role: "Frontend Developer",
    location: "Multan, Pakistan",
    bio: "Passionate React Developer focused on building clean UI and scalable apps.",
    avatar: "https://i.pravatar.cc/150?img=3",
    github: "https://github.com/dashboard",
    linkedin: "https://linkedInexample.com"
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={user.avatar} alt="Avatar" style={styles.avatar} />
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.role}>{user.role}</p>
        <p style={styles.bio}>{user.bio}</p>
        <div style={styles.infoGroup}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
        </div>
        <div style={styles.links}>
          <a href={user.github} target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
          <a href={user.linkedin} target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '50px 20px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '80vh',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '15px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  role: {
    color: '#666',
    fontSize: '16px',
    marginBottom: '15px',
  },
  bio: {
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  infoGroup: {
    marginBottom: '20px',
    color: '#444',
    fontSize: '15px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    color: '#0077b5',
    fontWeight: 'bold',
    textDecoration: 'none',
  }
};

export default Profile;
