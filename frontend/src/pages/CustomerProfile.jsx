// src/pages/CustomerProfile.jsx
import React from 'react';

const CustomerProfile = () => {
  // Sample customer data (replace with dynamic data from API or state management)
  const customerData = {
    name: 'John Doe',
    address: '123 Main St, City, State',
    mobile: '9876543210',
    username: 'john_doe',
  };

  return (
    <div className="profile-container">
      <h2>Customer Profile</h2>
      
      <div className="profile-detail">
        <div className="profile-field">
          <strong>Name: </strong>
          <span>{customerData.name}</span>
        </div>
        <div className="profile-field">
          <strong>Address: </strong>
          <span>{customerData.address}</span>
        </div>
        <div className="profile-field">
          <strong>Mobile: </strong>
          <span>{customerData.mobile}</span>
        </div>
        <div className="profile-field">
          <strong>Username: </strong>
          <span>{customerData.username}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
