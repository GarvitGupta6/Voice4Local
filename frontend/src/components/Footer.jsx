import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.contact}>Contact: 123-456-7890</div>
      <div style={styles.socialLinks}>
        Follow us: 
        <a href="https://facebook.com" style={styles.link}>Facebook</a> |{' '}
        <a href="https://twitter.com" style={styles.link}>Twitter</a> |{' '}
        <a href="https://instagram.com" style={styles.link}>Instagram</a>
      </div>
      <div style={styles.copyRight}>© 2025 Voice 4 Local</div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2C3E50',  // Dark Blue-Grey background for elegance
    color: '#ECF0F1',  // Light text color for contrast
    padding: '20px 10px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow
  },
  contact: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  socialLinks: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  link: {
    color: '#3498DB',  // Blue color for links
    textDecoration: 'none',
    padding: '0 5px',
  },
  linkHover: {
    color: '#1D6FB8',  // Darker blue on hover
  },
  copyRight: {
    fontSize: '14px',
    marginTop: '10px',
  }
};

export default Footer;
