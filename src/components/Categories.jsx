import React, { useState } from 'react';

const Categories = () => {
  // Array of your 7 requested food categories
  const categoriesList = [
    { name: 'Burgers & Sandwiches', icon: '🍔' },
    { name: 'Chicken & Seafood', icon: '🍗' },
    { name: 'Pizza & Italian', icon: '🍕' },
    { name: 'Mexican-Style Fast Food', icon: '🌮' },
    { name: 'Breakfast', icon: '🥞' },
    { name: 'Sides & Snacks', icon: '🍟' },
    { name: 'Desserts & Drinks', icon: '🥤' }
  ];

  // State to track when mouse enters the section to show manual navigation controls
  const [isHovered, setIsHovered] = useState(false);

  // We double the array content to create a flawless, gap-free loop cycle in CSS animation
  const infiniteLoopList = [...categoriesList, ...categoriesList];

  return (
   <section 
  style={styles.section}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* ADD THESE LINES FOR THE TITLE AND SUBTITLE */}
  <div style={styles.headerContainer}>
    <h2 style={styles.heading}>Categories</h2>
    <p style={styles.subHeading}>Browse an unlimited pool of fast-food bites.</p>
  </div>
      <div style={styles.containerWrapper}>
        {/* Overlay manual buttons that reveal on hover */}
        {isHovered && (
          <>
            <button style={{ ...styles.arrowBtn, left: '20px' }}>◀</button>
            <button style={{ ...styles.arrowBtn, right: '20px' }}>▶</button>
          </>
        )}

        {/* Moving track container */}
        <div style={styles.scrollTrack}>
          {infiniteLoopList.map((category, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconCircle}>{category.icon}</div>
              <h4 style={styles.cardTitle}>{category.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded style block to inject the CSS keyframes directly into the document */}
      <style>{`
        @keyframes scrollLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% * 7)); } /* Shifts exactly past the first set of 7 items */
        }
      `}</style>
    </section>
  );
};

const styles = {
    headerContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#222222',
    marginBottom: '8px',
  },
  subHeading: {
    fontSize: '16px',
    color: '#666666',
  },
  section: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '80px 0',
    overflow: 'hidden',
    position: 'relative',
  },
  containerWrapper: {
    width: '100%',
    maxWidth: '1050px', // Restricts width perfectly so exactly 3 cards fit (300px width + 50px gap each)
    margin: '0 auto',
    position: 'relative',
    padding: '0 25px',
  },
  scrollTrack: {
    display: 'flex',
    gap: '50px',
    width: 'max-content',
    animation: 'scrollLoop 85s linear infinite', // Changed from 25s to 75s to slow it down 3x
  },
  card: {
    width: '300px', // Exact sizing constraints
    height: '240px',
    backgroundColor: '#F8F9FA',
    border: '1px solid #E9ECEF',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    flexShrink: 0, // Prevents cards from getting squeezed smaller than 300px
    boxShadow: '0 4px 12px rgba(0,0,0,0.01)',
  },
  iconCircle: {
    fontSize: '60px',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#222222',
    textAlign: 'center',
  },
  arrowBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: '#FFC000',
    color: '#FFFFFF',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    boxShadow: '0 4px 10px rgba(255, 192, 0, 0.4)',
  },
};

export default Categories;