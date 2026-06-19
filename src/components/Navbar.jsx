import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navBar}>
      <div style={styles.navContainer}>
        {/* Left Side: Logo */}
        <div style={styles.logo}>
          Food<span style={styles.logoGold}>izo</span>
        </div>

        {/* Right Side: Authentication Buttons */}
        <div style={styles.authButtons}>
          <button style={styles.signInBtn}>Sign In</button>
          <button style={styles.signUpBtn}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

// Sleek, clean inline styles using our design tokens
const styles = {
  navBar: {
    width: '100%',
    height: '70px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000, // Keeps it floating on top of all other elements
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#222222',
    letterSpacing: '0.5px',
  },
  logoGold: {
    color: '#FFC000', // Your signature gold-yellow theme color
  },
  authButtons: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  signInBtn: {
    backgroundColor: 'transparent',
    color: '#FFC000',
    fontSize: '15px',
    fontWeight: '500',
    padding: '10px 20px',
    borderRadius: '25px',
    // Hover effects are managed globally or via dynamic pseudo-classes later
  },
  signUpBtn: {
    backgroundColor: '#FFC000',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '500',
    padding: '10px 24px',
    borderRadius: '25px',
    boxShadow: '0 4px 6px rgba(255, 192, 0, 0.2)',
  },
};

export default Navbar;