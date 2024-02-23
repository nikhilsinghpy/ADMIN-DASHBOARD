import React from 'react'
import {  Link } from "react-router-dom";
import "./Header.css"
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="compnaylogo">
          <Link to="" className="logo">Belle Chic</Link>
        </div>
        <div className="info">
          <div className="searchbar">
                <input type="search" name="" id="" placeholder='Want someting else ;)'/>
                <button className='search-Btn'><CiSearch className='icon-serch'/></button>
            </div>
          <nav className='navBar'>
            <ul className='navItem'>
              <li><Link to="" className="navLink"><CiUser /></Link></li>
              <li><Link to="" className="navLink"><IoIosNotificationsOutline /></Link></li>
              <li><Link to="" className="navLink"><CiSettings /></Link></li>
            </ul>
          </nav>
          
        </div>
      </header>
    </>
  );
};
