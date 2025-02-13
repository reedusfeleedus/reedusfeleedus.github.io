import React from 'react';

// Blog component - Currently a placeholder for future blog functionality
const Blog = ({ onBack }) => {
  // Common styles that can be reused
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    header: {
      fontSize: '2.5rem',
      marginBottom: '0.5rem',
      fontFamily: 'inherit'
    },
    sectionHeader: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      fontFamily: 'inherit',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      paddingBottom: '0.5rem'
    },
    postCard: {
      padding: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
      background: 'rgba(255, 255, 255, 0.05)'
    }
  };

  return (
    <div className="app-container">
      {/* Window chrome */}
      <div className="title-bar">
        <div className="title-bar-text">Pranav Subash Blog</div>
        <div className="title-bar-controls">
          <button className="title-bar-button minimize"></button>
          <button className="title-bar-button maximize"></button>
          <button className="title-bar-button close"></button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="menu-wrapper">
          <div 
            className="menu-item"
            onClick={onBack}
            style={{ cursor: 'pointer' }}
          >
            ← Return to Terminal
          </div>
        </div>
      </nav>

      {/* Blog content area */}
      <div 
        className="terminal-container"
        style={{
          backgroundColor: 'var(--terminal-background)',
          color: 'var(--terminal-text)',
          fontFamily: "'Ubuntu Mono', monospace",
          padding: '2rem',
          height: 'calc(100vh - 70px)', 
          overflowY: 'auto'
        }}
      >
        <div style={styles.container}>
          <h1 style={styles.header}>BLOG</h1>

          {/* Placeholder message */}
          <div style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.8
          }}>
            Coming Soon...
          </div>

          {/* Latest posts section */}
          <div>
            <h2 style={styles.sectionHeader}>Latest Posts</h2>

            {/* Placeholder post cards */}
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {[1, 2, 3].map((_, index) => (
                <div key={index} style={styles.postCard}>
                  <div style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem'
                  }}>
                    Post Title Coming Soon...
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    opacity: 0.7
                  }}>
                    Description coming soon...
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 