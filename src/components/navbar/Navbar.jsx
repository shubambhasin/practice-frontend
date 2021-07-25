import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar flex aic jcsa">
      <div className="brand pointer">Flipkart</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for brands, product and more..."
          className=""
        />
      </div>
      <div className="user-interactions">
        <button className="btn ">Cart</button>
      </div>
    </div>
  );
};
