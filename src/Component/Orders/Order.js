import React, { useEffect, useState } from "react";
import "./Order.css";
import { FaGratipay, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
export const Order = () => {
  const [Order, setOrder] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setOrder(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);
  return (
    <div>
      <div className="container-fluid product">
        <h4 className="heading">Order list</h4>
        <div className="product-container shadow">
          <div className="product-head">
            <p>
              <FaGratipay /> Tip search by Product ID: Each product is provided
              with a unique ID, which you can rely on to find the exact product
              you need.
            </p>
          </div>
        </div>
        <div className="product-container shadow">
          <div className="product-head">
            <div className="searchbar">
              <input type="search" name="" id="" placeholder="Search here" />
              <button>
                <FaSearch />
              </button>
            </div>
            <Link to="/addproduct" className="btn btn-primary">
              + Add New Product
            </Link>
          </div>
        </div>
        <div className="product-container shadow">
          <div className="product-head">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Order.map((item,index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.rating.count}</td>
                    <td>{item.rating.rate}</td>
                    <td>
                      <Link
                        to={`/order/${item.id}`}
                        className="btn btn-primary"
                      >
                        View
                      </Link>
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
