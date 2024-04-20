import React, { useEffect, useState } from "react";
import "../Orders/Order.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
export const Employee = () => {
  const [Empdata, setEmpdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res.data);
        setEmpdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="container-fluid p-2">
        <div className="order-container">
          <div className="hed">
            <Link className="btn btn-primary" to="/addemployee">ADD Employee</Link>
            <div className="searchbar">
              <input type="search" name="" id="" placeholder="Search here" />
              <button>
                <FaSearch />
              </button>
            </div>
            {/* <Link to="/order"> view all</Link> */}
          </div>
          <div className="table-con mt-3" style={{ width: "100%" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Employee ID</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Position</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Empdata.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.company.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button className="btn btn-primary">Action</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
