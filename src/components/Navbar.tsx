import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navbar;
