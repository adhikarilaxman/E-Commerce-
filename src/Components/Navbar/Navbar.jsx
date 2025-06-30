import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">E-Commerce</div>

        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button type="submit">Search</button>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="#cart" className="cart-link">
              <img src="/shopping_cart.png" alt="Cart" className="cart-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
