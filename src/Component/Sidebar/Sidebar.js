import React, { useEffect, useState } from 'react';
import { FaHome, FaBars, FaUserAlt, FaChartBar,FaUsers,FaChartLine,FaDatabase, FaCommentAlt, FaCog, FaThList, FaBell,FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import external CSS file for styling



const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHome />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingCart />
        },
        {
            path: "/order",
            name: "Order",
            icon: <FaCommentAlt />
        },
        {
            path: "/employee",
            name: "Employee",
            icon: <FaUserAlt />
        },
        {
            path: "/message",
            name: "Message",
            icon: <FaBell />
        },
        {
            path: "/report",
            name: "Report",
            icon: <FaChartBar />
        },
        {
            path: "/static",
            name: "Static",
            icon: <FaDatabase />
        },
        {
            path: "/customer",
            name: "Customer",
            icon: <FaUsers />
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <FaCog />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaChartLine />
        }
    ];
    

    return (
        <div className="container-cs">
            <div className={isOpen ? "sidebar open" : "sidebar closed"}>
            <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Nikhil</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                     <FaBars onClick={toggle}/>
                   </div>
               </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active" onClick={toggle}>
                        <div className="icon"> {item.icon}</div>
                        <div className={isOpen ? "link_text show" : "link_text hide"}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
