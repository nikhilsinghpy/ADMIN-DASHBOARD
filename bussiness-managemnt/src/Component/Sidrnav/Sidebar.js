import React from 'react';
import './Sidenav.css';
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaRegListAlt, FaSignOutAlt,FaClipboardList,FaHandHoldingHeart,FaAccusoft,FaUniversity ,FaConnectdevelop,FaCog,FaChartPie} from 'react-icons/fa';

const Sidebar = ({children}) => {
    return (
        <div className="container containere-fluid">
            <div className="sidebar">
            <div className="sidebar-menu-container">
            <ul className="sidebar-menu">
                <p className='sidebar-header'>Main</p>
                <li>
                <Link to="/">
                    <FaHome className="sidebar-icon" />
                    DashBoard
                </Link>
                </li>
                <li>
                <Link to="/profile">
                    <FaUser className="sidebar-icon" />
                    Profile
                </Link>
                </li>
                <p className='sidebar-header'>LISTS</p>
                <li>
                <Link to="/user">
                    <FaUser className="sidebar-icon" />
                    Management
                </Link>
                </li>
                <li>
                <Link to="/produt">
                    <FaRegListAlt className="sidebar-icon" />
                    Calander
                </Link>
                </li>
                <li>
                <Link to="/orders">
                    <FaClipboardList className="sidebar-icon" />
                    Document
                </Link>
                </li>
                <p className='sidebar-header'>GENERAL</p>
                <li>
                <Link to="/Element">
                    <FaAccusoft className="sidebar-icon" />
                    Investor
                </Link>
                </li>
                <li>
                <Link to="/notes">
                    <FaHandHoldingHeart className="sidebar-icon" />
                    Patners
                </Link>
                </li>
                <li>
                <Link to="/Forms">
                    <FaUniversity className="sidebar-icon" />
                    Host Event
                </Link>
                </li>
                <li>
                <Link to="/event">
                    <FaConnectdevelop className="sidebar-icon" />
                    Event
                </Link>
                </li>
                <p className='sidebar-header'>MAINTENANCEC</p>
                <li>
                <Link to="/logout">
                    <FaSignOutAlt className="sidebar-icon" />
                    Logout
                </Link>
                </li>
                <li>
                <Link to="/setting">
                    <FaCog className="sidebar-icon" />
                    Setting
                </Link>
                </li>
                <p className='sidebar-header'>ANALTYICS</p>
                <li>
                <Link to="/chart">
                    <FaChartPie className="sidebar-icon" />
                    Chart
                </Link>
                </li>
                <li>
                <Link to="/logs">
                    <FaSignOutAlt className="sidebar-icon" />
                    About us
                </Link>
                </li>
                
            </ul>
            </div>
            </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;