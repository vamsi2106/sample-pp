import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, checkAuth } from "../features/login/loginSlice";
import { RootState } from "../store/store";
import "../App.css";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart} = useSelector((state:any) => state)

  let count = 0

  if(cart.items){
    count = cart.items.length
  }


  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(checkAuth()); // Check authentication state on load
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout to clear auth state
    navigate("/login"); // Redirect to login page after logout
  };


  return (
    <nav className="navbar">
      <ul className="d-flex  justify-content-between">
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
              Cart <span>{count}</span>
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
                <img
                  src="https://res.cloudinary.com/dywrzseia/image/upload/v1728390416/konderhuk_f1ndyp.jpg"
                  className="userProfileImg"
                  alt="Profile"
                />
                <span className="link">
                {/*{user?.username}*/}
                Prasad
                </span>
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
