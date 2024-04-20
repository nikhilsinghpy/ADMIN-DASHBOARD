import React, { useEffect, useState } from "react";
import "./Product.css";
import { FaGratipay, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
export const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts(res.data)
            console.log(products)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);
  return (
    <div>
      <div className="container-fluid product">
        <h4 className="heading">Product list</h4>
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
              + Add New
            </Link>
          </div>
        </div>
        <div className="product-container shadow">
          <div className="product-head">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Sale</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.rating.count}</td>
                    <td>{product.rating.rate}</td>
                    <td>
                      <Link
                        to={`/product/${product.id}`}
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
