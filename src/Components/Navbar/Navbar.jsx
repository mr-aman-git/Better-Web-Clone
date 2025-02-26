import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="main-nav">
        <div className="navbar">
          <h1>Better</h1>

          <div class="dropdown">
            <button class="dropbtn">Buy</button>
            <div class="dropdown-content">
              <a href="#">
                Link 1 <i class="ri-arrow-right-line"></i>
              </a>
              <a href="#">Link 2 <i class="ri-arrow-right-line"></i></a>
              <a href="#">Link 3 <i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
