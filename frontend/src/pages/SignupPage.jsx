// src/pages/SignupPage.jsx
import React from 'react';
import CustomerSignupForm from '../components/forms/CustomerSignupForm';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <CustomerSignupForm />
      </div>

      <style>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f4f8;
        }

        .signup-box {
          background-color: #fff;
          padding: 30px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          width: 400px;
          text-align: center;
        }

        .signup-box h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #3498db;
        }

        .signup-box button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
          width: 100%;
        }

        .signup-box button:hover {
          background-color: #2980b9;
        }

        .signup-box p {
          font-size: 14px;
          color: #777;
        }

        .signup-box p a {
          color: #3498db;
          text-decoration: none;
        }

        .signup-box p a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
