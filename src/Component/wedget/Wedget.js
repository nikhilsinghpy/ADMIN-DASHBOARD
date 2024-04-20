import React from "react";
import "./Wedget.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaChartPie, FaUser } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export const Wedget = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          1000, 1500, 1200, 1800, 2000, 2500, 2200, 3000, 3500, 4000, 4500,
          5000,
        ], 
        backgroundColor: " #99ccff",
        borderColor: " #99ccff",
        borderWidth: 1,
      },
      {
        label: "Profit",
        data: [
          700, 900, 800, 1000, 1200, 1500, 1300, 1700, 2000, 2500, 3000, 3500,
        ],
        backgroundColor: "#cc99ff",
        borderColor: "#cc99ff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="container-fluid wedget">
        <div className="card cs-card">
          <div className="card-content">
            <p className="we-tittle">2050</p>
            <p className="we-dec">Total Order</p>
          </div>
          <div className="card-icon">
            <Link to={"/"} className="wedget-Link">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
        <div className="card cs-card">
          <div className="card-content">
            <p className="we-tittle">300K</p>
            <p className="we-dec">Total Expenses</p>
          </div>
          <div className="card-icon">
            <Link to={"/"} className="wedget-Link">
              <FaWallet />
            </Link>
          </div>
        </div>
        <div className="card cs-card">
          <div className="card-content">
            <p className="we-tittle">87.5%</p>
            <p className="we-dec">Total Revenue</p>
          </div>
          <div className="card-icon">
            <Link to={"/"} className="wedget-Link">
              <FaChartPie />
            </Link>
          </div>
        </div>
        <div className="card cs-card">
          <div className="card-content">
            <p className="we-tittle">2500</p>
            <p className="we-dec">New User</p>
          </div>
          <div className="card-icon">
            <Link to={"/"} className="wedget-Link">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Bar options={options} data={data} />
          </div>
          <div className="col-md-6">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
