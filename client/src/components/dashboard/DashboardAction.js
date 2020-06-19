import React from "react";
import { Link } from "react-router-dom";

const dashboardAction = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn">
        <i className="fa fa-user-circle text-primary"></i>
        Edit Profile
      </Link>
      <Link to="/add-product" className="btn">
        <i className="fa fa-product-hunt text-primary"></i>
        Add Product
      </Link>
      <Link to="/add-skill" className="btn">
        <i className="fa fa-superpowers text-primary"></i>
        Add Skill
      </Link>
      <Link to="/orders" className="btn">
        <i className="fa fa-first-order text-primary"></i>
        Orders
      </Link>
      <Link to="/customers.html" className="btn">
        <i className="fa fa-superpowers text-primary"></i>
        Customers
      </Link>
      <Link to="/delete-profile.html" className="btn">
        <i className="fa fa-address-book-o text-primary"></i>
        Delete Account
      </Link>
    </div>
  );
};


export default dashboardAction