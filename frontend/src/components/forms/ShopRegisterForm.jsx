import React, { useState } from 'react';

const ShopRegisterForm = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    mobile: '',
    email: '',
    description: '',
    address: '',
    username: '',
    password: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    // FormData for image upload
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    console.log('Shopkeeper Registration Data:', formData);
    // Yahan API call karoge using fetch/axios
  };

  return (
    <>
      <style>{`
        /* General Form Styling */
        .signup-form {
          background-color: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
          max-width: 450px;
          margin: 50px auto;
          box-sizing: border-box;
        }

        .signup-form h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 28px;
        }

        .signup-form input,
        .signup-form textarea {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
          background-color: #fafafa;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .signup-form input:focus,
        .signup-form textarea:focus {
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

        /* File input styling */
        .signup-form input[type="file"] {
          padding: 10px;
          background-color: #fafafa;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        /* Textarea Styling */
        .signup-form textarea {
          resize: vertical;
          min-height: 80px;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Register Shop</h2>

        <input
          type="text"
          name="shopName"
          placeholder="Shop Name"
          value={formData.shopName}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
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

        <textarea
          name="description"
          placeholder="Shop Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Shop Address"
          value={formData.address}
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

        <button type="submit">Register Shop</button>
      </form>
    </>
  );
};

export default ShopRegisterForm;
