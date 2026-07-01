import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Categories from './components/Categories';
import PopularItems from './components/PopularItems';
import HowToOrder from './components/HowToOrder';


function App() {
  return (
    <div style={styles.appWrapper}>
      {/* Step 3: Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Step 4: Hero Banner Section */}
        <Hero />

        {/* Step 5: B2B & App Promotion Cards */}
        <Partners />

        {/* Step 6: Infinite Auto-Scrolling Categories */}
        <Categories />

        {/* Step 7: Local Popular Items Showcase */}
        <PopularItems />

        {/* Step 8: Interactive Ordering Guide */}
        <HowToOrder />
      </main>

      {/* Custom Footer Placeholder */}
      <footer style={styles.customFooter}>
        <div style={styles.footerContainer}>
          <p>© 2026 Shepherd-bit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


const styles = {
  appWrapper: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  customFooter: {
    width: '100%',
    backgroundColor: '#222222', // Sleek dark footer tracking theme setup
    color: '#FFFFFF',
    padding: '30px 0',
    marginTop: 'auto',
    borderTop: '3px solid #FFC000', // Gold accent line separating your footer
  },
  footerContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },
};

export default App;