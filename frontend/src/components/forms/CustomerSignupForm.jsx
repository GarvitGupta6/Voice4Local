import React, { useState } from 'react';

const CustomerSignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    console.log('Customer Signup Data:', formData);
    // Yahan API call karoge later
  };

  return (
    <>
      <style>{`
        /* General Styling */
        .signup-form {
          background-color: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          margin: 50px auto;
          box-sizing: border-box;
        }

        .signup-form h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .signup-form input {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
          background-color: #fafafa;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .signup-form input:focus {
          border-color: #3498db;
          background-color: #e7f0ff;
          outline: none;
        }

        .signup-form button {
          width: 100%;
          padding: 14px;
          background-color: #3498db;
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .signup-form button:hover {
          background-color: #2980b9;
        }

        .signup-form p {
          text-align: center;
          font-size: 14px;
          color: #777;
        }

        .signup-form p a {
          color: #3498db;
          text-decoration: none;
        }

        .signup-form p a:hover {
          text-decoration: underline;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Customer Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 8 chars)"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
        
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </>
  );
};

export default CustomerSignupForm;
