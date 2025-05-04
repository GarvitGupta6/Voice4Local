import React from 'react';

const ShopCard = ({ image, name, location }) => {
  return (
    <>
      <style>{`
        .shop-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 250px;
          background-color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          margin: 20px;
          cursor: pointer;
        }

        .shop-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .shop-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-bottom: 1px solid #ddd;
        }

        .shop-card div {
          padding: 15px;
        }

        .shop-card h3 {
          font-size: 18px;
          color: #333;
          margin: 10px 0;
          font-weight: bold;
        }

        .shop-card p {
          font-size: 14px;
          color: #777;
        }

        .shop-card h3, .shop-card p {
          margin-bottom: 5px;
        }
      `}</style>

      <div className="shop-card">
        <img src={image} alt="Shop" />
        <div>
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
