import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setUserType('');
    navigate('/');
  };

  // Handle search
  const handleSearch = () => {
    if (searchQuery && location) {
      console.log('Searching:', searchQuery, 'in', location);
      navigate(`/search-results?query=${searchQuery}&location=${location}`);
    } else {
      alert("Please enter both search query and location!");
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <style>{`
        /* General Header Styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: #2c3e50;
          color: white;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Left: Logo */
        .logo {
          flex: 1;
          display: flex;
          justify-content: flex-start;
        }

        .logo h2 {
          margin: 0;
          font-size: 24px;
          font-family: 'Arial', sans-serif;
          color: white;
        }

        /* Centered search bar */
        .search-container {
          display: flex;
          gap: 10px;
          align-items: center;
          flex: 2;
          justify-content: center;
        }

        .search-input {
          padding: 10px;
          border-radius: 25px;
          border: 1px solid #ccc;
          width: 200px;
        }

        .search-input:focus {
          outline: none;
          border-color: #3498db;
        }

        .search-button {
          padding: 10px 20px;
          border-radius: 25px;
          background-color: #3498db;
          color: white;
          border: none;
          cursor: pointer;
        }

        .search-button:hover {
          background-color: #2980b9;
        }

        .clear-button {
          background: none;
          border: none;
          color: #3498db;
          font-size: 14px;
          cursor: pointer;
        }

        .clear-button:hover {
          text-decoration: underline;
        }

        /* Right: Login/User Dropdown */
        .user-container {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .user-dropdown {
          position: relative;
        }

        .user-btn {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
        }

        .user-btn:hover {
          background-color: #2980b9;
        }

        .dropdown-content {
          display: ${dropdownOpen ? 'block' : 'none'};
          position: absolute;
          background-color: white;
          color: #333;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 200px;
          z-index: 1;
          transition: opacity 0.3s ease-in-out;
          opacity: ${dropdownOpen ? 1 : 0};
        }

        .dropdown-content a {
          text-decoration: none;
          color: #3498db;
          padding: 8px 12px;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #f0f0f0;
        }

        .login-btn {
          padding: 10px 20px;
          background-color: #2980b9;
          color: white;
          border-radius: 25px;
          text-decoration: none;
        }

        .login-btn:hover {
          background-color: #1d6fb8;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .search-container {
            flex-direction: column;
            align-items: stretch;
          }

          .search-input {
            width: 100%;
          }

          .search-button {
            width: 100%;
          }

          .user-container {
            flex: 0;
            justify-content: center;
            margin-top: 10px;
          }
        }
      `}</style>

      <header className="header">
        {/* Left: Logo */}
        <div className="logo">
          <h2>Voice 4 Local</h2>
        </div>

        {/* Middle: Search */}
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            className="search-input"
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
          {searchQuery || location ? (
            <button className="clear-button" onClick={() => { setSearchQuery(''); setLocation(''); }}>Clear</button>
          ) : null}
        </div>

        {/* Right: Login/User Dropdown */}
        <div className="user-container">
          {isLoggedIn ? (
            <div className="user-dropdown">
              <button className="user-btn" onClick={toggleDropdown}>
                {username} ⌄
              </button>
              <div className="dropdown-content">
                {userType === 'shopkeeper' && (
                  <>
                    <Link to="/shopkeeper-profile">Profile</Link>
                    <Link to="/your-products">Your Products</Link>
                  </>
                )}
                {userType === 'customer' && (
                  <>
                    <Link to="/customer-profile">Profile</Link>
                    <Link to="/cart">Cart / Order</Link>
                  </>
                )}
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
