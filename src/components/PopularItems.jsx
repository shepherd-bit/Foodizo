import React from 'react';

const PopularItems = () => {
  // Array of 4 trending food items with rating and price details
  const foodItems = [
    {
      id: 1,
      name: 'Cheesy Bacon Double Burger',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
      rating: '4.9',
      price: '$8.99',
    },
    {
      id: 2,
      name: 'Crispy Buffalo Wings Basket',
      img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80',
      rating: '4.8',
      price: '$11.49',
    },
    {
      id: 3,
      name: 'Loaded Pepperoni Stuffed Crust',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80',
      rating: '4.9',
      price: '$14.99',
    },
    {
      id: 4,
      name: 'Caramel Crunch Milkshake',
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80',
      rating: '4.7',
      price: '$5.25',
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Heading */}
        <h2 style={styles.heading}>Popular Near You</h2>
        
        {/* 4-Card Responsive Grid */}
        <div style={styles.grid}>
          {foodItems.map((item) => (
            <div key={item.id} style={styles.card}>
              {/* Product Image */}
              <div style={styles.imageWrapper}>
                <img src={item.img} alt={item.name} style={styles.image} />
              </div>

              {/* Product Info */}
              <div style={styles.info}>
                <div style={styles.metaRow}>
                  <span style={styles.rating}>★ {item.rating}</span>
                </div>
                <h3 style={styles.itemName}>{item.name}</h3>
                
                {/* Price and Add button footer */}
                <div style={styles.cardFooter}>
                  <span style={styles.price}>{item.price}</span>
                  <button style={styles.addBtn}>+</button>
                </div>
              </div>
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
    backgroundColor: '#F8F9FA', // Off-white contrast
    padding: '80px 0',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#222222',
    marginBottom: '40px',
    textAlign: 'left',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Auto splits into 4 cards nicely
    gap: '24px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    border: '1px solid #E9ECEF',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  metaRow: {
    marginBottom: '8px',
  },
  rating: {
    backgroundColor: '#FFFDF0',
    color: '#FFC000', // Gold star color
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '600',
  },
  itemName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#222222',
    lineHeight: '1.4',
    marginBottom: '20px',
    flexGrow: 1,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  price: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#222222',
  },
  addBtn: {
    backgroundColor: '#FFC000', // Gold action button
    color: '#FFFFFF',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    fontSize: '20px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(255, 192, 0, 0.3)',
  },
};

export default PopularItems;