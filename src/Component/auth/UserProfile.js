import React from 'react';
import './UserProfile.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPen, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const UserProfile = () => {
  return (
    <div>
        <div className="container-fluid p-5">
            <div className=" usercard" >
                <div className="card cs-user">
                    <div className="img-container">
                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                    </div>
                    <div className="user-detail ">
                        <div className="card-body card">
                            <h5 className="card-title">Hello Nikhil</h5>
                            <p className="card-text">Mern stack developer</p>
                        </div>
                        <div className="card cs-icon" >
                            <Link to="/" className='Btn'><FaInstagram/></Link>
                            <Link to="/" className='Btn'><FaTwitter/></Link>
                            <Link to="/" className='Btn'><FaFacebook/></Link>
                            <Link to="/" className='Btn'><FaLinkedin/></Link>
                        </div>
                    </div>
                </div>
                <div className="card cs-user">
                    <div className="user-detail">
                        <div className="card-body card">
                            <h5 className="card-title">About Me</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis.</p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Your Info 
                                <span className="edit-link">
                                    <Link to="/editprofile" className='edit'>
                                    <FaPen /> Edit
                                    </Link>
                                </span>
                                </h5>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item">Name: Nikhil</li>
                                <li className="list-group-item">Email: 7I8k5@example.com</li>
                                <li className="list-group-item">Phone: 1234567890</li>
                                <li className="list-group-item">Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis.</li>
                                <li className="list-group-item">Role: Admin.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Employee Info 
                            <span className="edit-link">
                                <Link to="/editprofile" className='edit'>
                                <FaPen /> Edit
                                </Link>
                            </span>
                            </h5>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Current Position: Software Engineer</li>
                            <li className="list-group-item">Department: Engineering</li>
                            <li className="list-group-item">Team: Frontend Development</li>
                            <li className="list-group-item">Address: 123 Main St, City, Country</li>
                            <li className="list-group-item">Role: Developer</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
