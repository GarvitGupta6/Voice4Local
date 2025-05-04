import React from 'react';
import ShopRegisterForm from '../components/forms/ShopRegisterForm';

const RegisterShopPage = () => {
  return (
    <>
      <style>{`
        /* General Styles */
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f7fb;
        }

        .form-container {
          background-color: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
          width: 400px;
          box-sizing: border-box;
        }

        h2 {
          text-align: center;
          font-size: 28px;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 16px;
          color: #555;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border-radius: 8px;
          border: 1px solid #ccc;
          background-color: #fafafa;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: #3498db;
          background-color: #e7f0ff;
          outline: none;
        }

        button[type='submit'] {
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

        button[type='submit']:hover {
          background-color: #2980b9;
        }

        .footer-text {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #777;
        }

        .footer-text a {
          color: #3498db;
          text-decoration: none;
        }

        .footer-text a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="register-container">
        <div className="form-container">
          
          <ShopRegisterForm />
          <div className="footer-text">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterShopPage;
