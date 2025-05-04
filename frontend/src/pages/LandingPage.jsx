import React from 'react';
import ShopCard from '../components/ShopCard';
import ProductCard from '../components/ProductCard';

const LandingPage = () => {
  // Dummy data
  const shops = [
    { image: 'shop1.jpg', name: 'Fashion Hub', location: 'Lucknow' },
    { image: 'shop2.jpg', name: 'Grocery Point', location: 'Kanpur' }
  ];

  const products = [
    { image: 'prod1.jpg', name: 'T-Shirt', shopName: 'Fashion Hub', price: 500, location: 'Lucknow' },
    { image: 'prod2.jpg', name: 'Rice Bag', shopName: 'Grocery Point', price: 1000, location: 'Kanpur' }
  ];

  return (
    <>
      <style>{`
        .landing-container {
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }

        h2 {
          color: #2c3e50;
          font-size: 24px;
          text-align: center;
          margin-bottom: 20px;
          font-weight: bold;
        }

        /* Branding Section */
        .brand-logo {
          text-align: center;
          margin: 20px 0;
          padding: 10px;
        }

        .brand-logo h1 {
          font-size: 40px;
          color: #3498db;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 5px;
        }

        .brand-logo p {
          font-size: 18px;
          color: #7f8c8d;
        }

        .shop-list, .product-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 40px;
        }

        /* Card Styles */
        .shop-list .shop-card, .product-list .product-card {
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 250px;
          padding: 15px;
          background-color: #fff;
          transition: transform 0.3s ease-in-out;
        }

        .shop-list .shop-card:hover, .product-list .product-card:hover {
          transform: scale(1.05);
        }

        .shop-card img, .product-card img {
          width: 100%;
          border-radius: 8px;
        }

        .shop-card h3, .product-card h3 {
          font-size: 18px;
          color: #34495e;
          margin-top: 10px;
          text-align: center;
        }

        .shop-card p, .product-card p {
          color: #7f8c8d;
          font-size: 14px;
          text-align: center;
        }

        .product-card .price {
          font-size: 18px;
          color: #e74c3c;
          font-weight: bold;
          text-align: center;
        }

        /* Button style for card interactions */
        .shop-card button, .product-card button {
          background-color: #3498db;
          color: white;
          padding: 8px 15px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          width: 100%;
          font-size: 16px;
        }

        .shop-card button:hover, .product-card button:hover {
          background-color: #2980b9;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .shop-list, .product-list {
            justify-content: space-evenly;
          }

          .shop-list .shop-card, .product-list .product-card {
            width: 100%;
            max-width: 300px;
          }

          .brand-logo h1 {
            font-size: 32px;
          }

          .brand-logo p {
            font-size: 16px;
          }
        }

      `}</style>

      <div className="landing-container">
        {/* Voice 4 Local Branding Section */}
        <div className="brand-logo">
          <h1>Voice 4 Local</h1>
          <p>An Online Local Market</p>
          
          
        </div>

        <h2>Shops Near You</h2>
        <div className="shop-list">
          {shops.map((shop, index) => (
            <ShopCard key={index} {...shop} />
          ))}
        </div>

        <h2>Popular Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
