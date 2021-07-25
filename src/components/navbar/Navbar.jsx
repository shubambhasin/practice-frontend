import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar flex aic jcsa">
      <div className="brand">Flipkart</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for brands, product and more..."
          className=""
        />
      </div>
      <div className="user-interactions">
        <button className="btn ">Login</button>
        <button className="btn ">More</button>
        <button className="btn ">Cart</button>
      </div>
    </div>
  );
};
