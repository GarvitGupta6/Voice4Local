import React, { useState } from 'react';

const ProductCard = ({ image, name, shopName, price, location }) => {
  const [quantity, setQuantity] = useState(1);

  const handleInc = () => setQuantity(quantity + 1);
  const handleDec = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <>
      <style>{`
        .product-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          max-width: 300px;
          padding: 20px;
          margin: 20px;
          background-color: white;
          flex-direction: column;
          align-items: center;
        }

        .product-card img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .product-card h3 {
          margin: 15px 0;
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .product-card p {
          margin: 5px 0;
          color: #555;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .quantity-control button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .quantity-control button:hover {
          background-color: #2980b9;
        }

        .quantity-control span {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .product-card .price {
          font-size: 20px;
          color: #2ecc71;
          font-weight: bold;
          margin-top: 15px;
        }
      `}</style>

      <div className="product-card">
        <img src={image} alt="Product" />
        <div>
          <h3>{name}</h3>
          <p>Shop: {shopName}</p>
          <p>Location: {location}</p>
          <p className="price">Price: ₹{price * quantity}</p>
          <div className="quantity-control">
            <button onClick={handleDec}>-</button>
            <span>{quantity}</span>
            <button onClick={handleInc}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
