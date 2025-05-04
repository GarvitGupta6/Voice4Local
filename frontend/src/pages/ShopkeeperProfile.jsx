// src/pages/ShopkeeperProfile.jsx
import React from 'react';

const ShopkeeperProfile = () => {
  // Sample shopkeeper data (replace with dynamic data from API or state management)
  const shopkeeperData = {
    shopName: 'Super Shop',
    picture: 'https://via.placeholder.com/150', // Example picture URL
    username: 'super_shop',
    address: '456 Market St, City, State',
    contactNo: '1234567890',
    products: [
      { name: 'Product 1', price: '$20', description: 'Description of product 1' },
      { name: 'Product 2', price: '$30', description: 'Description of product 2' },
    ],
    delivery: 'Yes (Extra charge for delivery)',
  };

  return (
    <div className="profile-container">
      <h2>Shopkeeper Profile</h2>
      
      <div className="profile-detail">
        <div className="profile-field">
          <strong>Shop Name: </strong>
          <span>{shopkeeperData.shopName}</span>
        </div>
        <div className="profile-field">
          <strong>Picture: </strong>
          <img src={shopkeeperData.picture} alt="Shop" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="profile-field">
          <strong>Username: </strong>
          <span>{shopkeeperData.username}</span>
        </div>
        <div className="profile-field">
          <strong>Address: </strong>
          <span>{shopkeeperData.address}</span>
        </div>
        <div className="profile-field">
          <strong>Contact No: </strong>
          <span>{shopkeeperData.contactNo}</span>
        </div>
        <div className="profile-field">
          <strong>Delivery: </strong>
          <span>{shopkeeperData.delivery}</span>
        </div>
        
        <div className="profile-field">
          <strong>Products:</strong>
          <div className="products-list">
            {shopkeeperData.products.map((product, index) => (
              <div key={index} className="product-card">
                <p><strong>{product.name}</strong></p>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperProfile;
