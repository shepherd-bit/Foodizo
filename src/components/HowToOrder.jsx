import React, { useEffect, useState, useRef } from 'react';

const HowToOrder = () => {
  // Steps data tracking the symbols, titles, and descriptions
  const steps = [
    { icon: '📍', title: 'Input Location', desc: 'Type your address to discover restaurants delivery zones near you.' },
    { icon: '🍔', title: 'Browse for Items', desc: 'Pick from your favorite fast-food menus, deals, and daily specials.' },
    { icon: '🛍️', title: 'Order', desc: 'Securely check out in seconds using multiple flexible payment choices.' },
    { icon: '🛵', title: 'Track your Order', desc: 'Watch your meals arrive live with real-time map tracking utilities.' }
  ];

  const [isAnimate, setIsAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Triggering scroll animation hook once the element comes into perspective
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimate(true);
        }
      },
      { threshold: 0.2 } // Runs when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>How to Order</h2>

        <div style={styles.stepsWrapper}>
          {/* Background Connecting Line */}
          <div style={styles.lineBackground}>
            <div style={{
              ...styles.lineProgress,
              width: isAnimate ? '100%' : '0%' // Expands cleanly down the trail across time
            }}></div>
          </div>

          {/* Mapping the steps components */}
          {steps.map((step, idx) => (
            <div key={idx} style={styles.stepCard}>
              <div style={{
                ...styles.iconCircle,
                borderColor: isAnimate ? '#FFC000' : '#E9ECEF',
                backgroundColor: isAnimate ? '#FFFDF0' : '#FFFFFF',
                transitionDelay: `${idx * 0.4}s` // Cascading step highlights
              }}>
                {step.icon}
              </div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '80px 0 120px 0',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#222222',
    marginBottom: '60px',
  },
  stepsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    width: '100%',
    flexWrap: 'wrap',
    gap: '40px',
  },
  lineBackground: {
    position: 'absolute',
    top: '40px', // Centers perfectly horizontally against the 80px circles
    left: '10%',
    width: '80%',
    height: '4px',
    backgroundColor: '#E9ECEF',
    zIndex: 1,
  },
  lineProgress: {
    height: '100%',
    backgroundColor: '#FFC000', // Gold color animation trail
    transition: 'width 1.6s ease-in-out',
  },
  stepCard: {
    flex: '1 1 200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2, // Sits above the background line track layout
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '3px solid #E9ECEF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    marginBottom: '20px',
    transition: 'all 0.4s ease',
  },
  stepTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#222222',
    marginBottom: '10px',
  },
  stepDesc: {
    fontSize: '14px',
    color: '#666666',
    lineHeight: '1.5',
    maxWidth: '220px',
    margin: '0 auto',
  },
};

export default HowToOrder;