// src/pages/CartPage.jsx
import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Aloo Bhujia',
      shopName: 'Haldiram',
      price: 50,
      quantity: 2,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Cold Drink',
      shopName: 'Local Store',
      price: 40,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>From: {item.shopName}</p>
                <p>Price: ₹{item.price}</p>
                <div>
                  Quantity:
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <p>Total: ₹{item.price * item.quantity}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total Amount: ₹{totalAmount}</h3>
          <button className="place-order-btn">Place Order</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
