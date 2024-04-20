import React from "react";
import "./Pagenotfound.css";
import pgimage from "../../assets/60028-Converted.png";
export const Pagenotfound = () => {
  return (
    <div>
      <div className="container-fluid cs-page">
        <div className="row">
          <div className="col-md-12">
            <img src={pgimage} alt="" />
            <h1>Our website is Coming Soon, follow us for update now!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
