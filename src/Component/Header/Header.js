import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
      {/* <nav class="navbar fixed-top bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            React Admin
          </a>
            <div className="searchbar">
              <input type="search" name="" id="" />
              <button><FaSearch/></button>
            </div>
            <div className="userProfile">
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
            </div>
        </div>
      </nav> */}
      <div className="container-fluid header">
        <p className="header-heading">welcome Admin</p>
        <div className="searchbar">
          <input type="search" name="" id="" placeholder="Search here" />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="userProfile">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
