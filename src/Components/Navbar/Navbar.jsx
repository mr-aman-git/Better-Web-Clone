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
                Apply now 1 <span id="icon"><i class="ri-arrow-right-line"></i></span>
              </a>
              <a href="#">Purchase Rate <span id="icon1"><i class="ri-arrow-right-line"></i></span></a>
              <a href="#">Find an Agent <span id="icon2"><i class="ri-arrow-right-line"></i></span></a>
              <a href="#">Learning Center <span id="icon3"><i class="ri-arrow-right-line"></i></span></a>
              <a href="#">Affordability Calculator <span id="icon4"><i class="ri-arrow-right-line"></i></span></a>
              <a href="#">Rent vs Buy Calculator <span id="icon5"><i class="ri-arrow-right-line"></i></span></a>
              <a href="#">Mortgage Calculator <span id="icon6"><i class="ri-arrow-right-line"></i></span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
