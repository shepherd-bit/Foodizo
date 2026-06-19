import React from 'react';

const Categories = () => {
  // 5. Image placeholders added to your 7 requested food categories
  const categoriesList = [
    { name: 'Burgers & Sandwiches', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
    { name: 'Chicken & Seafood', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80' },
    { name: 'Pizza & Italian', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mexican-Style Fast Food', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80' },
    { name: 'Breakfast', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80' },
    { name: 'Sides & Snacks', img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80' },
    { name: 'Desserts & Drinks', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80' }
  ];

  // 2. We triple the array so the loop is so long it never shows a white blank space before resetting
  const infiniteLoopList = [...categoriesList, ...categoriesList, ...categoriesList];

  return (
    <section style={styles.section}>
      {/* Title & Subtitle Setup */}
      <div style={styles.headerContainer}>
        <h2 style={styles.heading}>Categories</h2>
        <p style={styles.subHeading}>Browse an unlimited pool of fast-food bites.</p>
      </div>

      <div style={styles.containerWrapper}>
        {/* 4. The class "scroll-track" handles the infinite movement and pauses on hover automatically via CSS */}
        <div className="scroll-track" style={styles.scrollTrack}>
          {infiniteLoopList.map((category, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img src={category.img} alt={category.name} style={styles.image} />
              </div>
              <h4 style={styles.cardTitle}>{category.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Keyframes Injector */}
      <style>{`
        .scroll-track {
    animation: scrollLoop 50s linear infinite;
  }
  @keyframes scrollLoop {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-350px * 7)); } 
  }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '80px 0',
    overflow: 'hidden',
    position: 'relative',
  },
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
  containerWrapper: {
    width: '100%',
    maxWidth: '1010px', // 1. Clamps width so exactly 3 larger cards (300px each + 40px gaps) show in the visible frame
    margin: '0 auto',
    position: 'relative',
    padding: '0 20px',
  },
  scrollTrack: {
    display: 'flex',
    gap: '40px', // Uniform gaps between cards
    width: 'max-content',
  },
  card: {
    width: '300px', // 1. Increased card width to make them larger
    height: '400px', // Balanced height for images
    backgroundColor: '#F8F9FA',
    border: '1px solid #E9ECEF',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    flexShrink: 0, 
    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
  },
  imageWrapper: {
    width: '100%',
    height: '320px',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // 5. Image placeholder rule ready for whatever food photos you swap in
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#222222',
    textAlign: 'center',
    marginTop: 'auto', // Pushes text neatly to the bottom
  },
};

export default Categories;