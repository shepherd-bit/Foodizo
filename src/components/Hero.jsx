import React from 'react';

const Hero = () => {
  return (
    <section style={styles.heroContainer}>
      {/* Dark Overlay to make white text stand out */}
      <div style={styles.overlay}></div>

      {/* Content Wrapper */}
      <div style={styles.content}>
        <h1 style={styles.title}>Your favorite fast-food bestie</h1>
        
        <p style={styles.subTitle}>
          Order <span style={styles.dot}>•</span> Relax <span style={styles.dot}>•</span> Eat
        </p>

        {/* Location Search Bar */}
        <div style={styles.searchContainer}>
          <div style={styles.inputWrapper}>
            {/* GPS/Location Icon */}
            <span style={styles.locationIcon}>📍</span>
            <input 
              type="text" 
              placeholder="Enter your delivery address" 
              style={styles.input}
            />
          </div>
          <button style={styles.searchBtn}>Search</button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    width: '100%',
    height: '80vh', // Full screen height
    backgroundImage: `url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1920&q=80')`, // High-res woman/burger theme image
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed', // This keeps the image non-scrollable/locked
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '70px', // Prevents the navbar from covering content
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // Soft dark tint for high text contrast
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2, // Sits on top of the overlay
    textAlign: 'center',
    color: '#FFFFFF',
    width: '100%',
    maxWidth: '800px',
    padding: '0 20px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '10px',
    letterSpacing: '-0.5px',
  },
  subTitle: {
    fontSize: '20px',
    fontWeight: '400',
    marginBottom: '40px',
    letterSpacing: '1px',
  },
  dot: {
    color: '#FFC000', // Gold-yellow separator dots
    margin: '0 10px',
    fontWeight: '700',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    padding: '8px',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingLeft: '15px',
  },
  locationIcon: {
    fontSize: '18px',
    marginRight: '10px',
    cursor: 'pointer', // Ready for your location-detection feature later
  },
  input: {
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    color: '#222222',
    fontFamily: 'inherit',
  },
  searchBtn: {
    backgroundColor: '#FFC000',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    padding: '12px 30px',
    borderRadius: '30px',
    boxShadow: '0 4px 10px rgba(255, 192, 0, 0.3)',
  },
};

export default Hero;