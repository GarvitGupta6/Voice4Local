import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [userType, setUserType] = useState('customer'); // Default user type is customer
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To show error messages after failed login
  const navigate = useNavigate(); // To handle redirection after login

  // Handle login on form submit
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to authenticate the user
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
        userType, // You can pass the userType to the backend for validation
      });

      // Check if the login was successful
      if (response.status === 200) {
        const { token, user } = response.data; // Assume backend sends a token and user data

        // Store token and user info (could use localStorage, Redux, or Context API)
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect based on user type
        if (userType === 'customer') {
          navigate('/customer-home');
        } else if (userType === 'shopkeeper') {
          navigate('/shopkeeper-home');
        } else if (userType === 'admin') {
          navigate('/admin-dashboard');
        }

        setErrorMessage(''); // Clear any error messages
      }
    } catch (error) {
      // Handle any error (e.g., wrong credentials)
      setErrorMessage('Invalid credentials. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f4f4;
        }

        .login-box {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          width: 350px;
          box-sizing: border-box;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 28px;
          color: #333;
        }

        .user-type-selection {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .user-type-selection button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          background-color: #3498db;
          color: white;
          cursor: pointer;
          border-radius: 25px;
          transition: background-color 0.3s;
        }

        .user-type-selection button:hover {
          background-color: #2980b9;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          font-size: 16px;
          color: #333;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
          margin-top: 5px;
        }

        .form-group input:focus {
          border-color: #3498db;
          outline: none;
        }

        .error-message {
          color: red;
          font-size: 14px;
          text-align: center;
          margin-bottom: 10px;
        }

        button[type='submit'] {
          width: 100%;
          padding: 12px;
          background-color: #3498db;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button[type='submit']:hover {
          background-color: #2980b9;
        }

        .login-links {
          text-align: center;
          margin-top: 15px;
        }

        .login-links p {
          font-size: 14px;
          color: #555;
        }

        .login-links a {
          color: #3498db;
          text-decoration: none;
        }

        .login-links a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          
          {/* User Type Selection */}
          <div className="user-type-selection">
            <button onClick={() => setUserType('customer')}>Customer</button>
            <button onClick={() => setUserType('shopkeeper')}>Shopkeeper</button>
            <button onClick={() => setUserType('admin')}>Admin</button>
          </div>

          {/* Error Message Display */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit">Login</button>
          </form>

          <div className="login-links">
            {/* Conditional links based on user type */}
            {userType === 'customer' && (
              <>
                <p>
                  <Link to="/forget-password/customer">Forget Password?</Link>
                </p>
                <p>
                  New customer? <Link to="/signup">Sign up for new</Link>
                </p>
              </>
            )}

            {userType === 'shopkeeper' && (
              <>
                <p>
                  <Link to="/forget-password/shopkeeper">Forget Password?</Link>
                </p>
                <p>
                  New shopkeeper? <Link to="/register-shop">Register Shop</Link>
                </p>
              </>
            )}

            {userType === 'admin' && (
              <p>
                <Link to="/forget-password/admin">Forget Password?</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
