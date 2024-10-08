import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../App.css";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state
  const navigate = useNavigate();

  // Check if the user is already logged in
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsAuthenticated(true); // Set authentication state if token exists
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("authToken"); // Remove the token from cookies
    setIsAuthenticated(false); // Set authentication state to false after logout
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <ul>
        <div>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
        </div>

        <div>
          {/* Conditionally render login or logout button based on authentication */}
          {!isAuthenticated ? (
            <li>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <a className="link" onClick={handleLogout}>
                Logout
              </a>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
