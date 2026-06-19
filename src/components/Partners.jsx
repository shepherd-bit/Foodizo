import React from 'react';
import { LuCar, LuStore, LuSmartphone } from 'react-icons/lu';

const Partners = () => {
  // Data array to easily populate the three promotional columns
  const promptData = [
  {
    icon: <LuCar size={60} color="#E6A100" />, // Changed from 28 to 40
    title: 'Sign Up as a Partner',
    desc: 'Enjoy competitive earnings, flexible hours, and the freedom to deliver fast food on your own',
  },
  {
    icon: <LuStore size={60} color="#E6A100" />, // Changed from 28 to 40
    title: 'Become a Retail Partner',
    desc: 'Grow your business, unlock digital storefront sales, and reach hungry customers right in your',
  },
  {
    icon: <LuSmartphone size={60} color="#E6A100" />, // Changed from 28 to 40
    title: 'Maximize convenience with a mobile app',
    desc: 'Get live order tracking, instant notifications, and personalized meal deals directly on your',
  },
];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {promptData.map((item, index) => (
          <div key={index} style={styles.card}>
            {/* Minimalist Top Icon Container */}
            <div style={styles.iconBox}>{item.icon}</div>
            
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDesc}>{item.desc}</p>
            
            {/* Elegant Call to Action Link */}
            <a href="#learn-more" style={styles.link}>
              Learn more <span style={styles.arrow}>➔</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: '100%',
    backgroundColor: '#FFFBEB', // Changed to a premium, faded pastel yellow
    padding: '80px 0',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Automated 3-column split
    gap: '30px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E9ECEF',
    borderRadius: '16px',
    padding: '40px 30px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconBox: {
    fontSize: '40px',
    backgroundColor: '#FFFDF0', // Very soft yellow background tint for the icon
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    boxShadow: '0 4px 10px rgba(255, 192, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#222222',
    marginBottom: '12px',
    lineHeight: '1.4',
  },
  cardDesc: {
    fontSize: '15px',
    color: '#666666',
    lineHeight: '1.6',
    marginBottom: '24px',
    flexGrow: 1, // Ensures all buttons align if texts are slightly different lengths
  },
  link: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#FFC000', // Gold-yellow text accent
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  arrow: {
    transition: 'transform 0.2s ease',
  },
};

export default Partners;