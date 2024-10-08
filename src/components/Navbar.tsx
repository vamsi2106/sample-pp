import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/login/loginSlice";
import { RootState } from "../store/store";
import "../App.css";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  console.log(user);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout to clear auth state
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
            <>
              <li>
                <img src={user?.userimg} className="userProfile" />
                <span className="link">{user?.username}</span>{" "}
                {/* Display username */}
              </li>
              <li>
                <a className="link" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
