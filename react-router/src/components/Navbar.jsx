import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_title">
        Flipkart
      </div>
      <ul className="navbar_links">
        <li className="nav_link"><Link className="nav_links" to="/">Home</Link></li>
        <li className="nav_link"><Link className="nav_links" to="/products">Products</Link></li>
        <li className="nav_link"><Link className="nav_links" to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
