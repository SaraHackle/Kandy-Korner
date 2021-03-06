import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar_item active">
        <Link className="navbar_link" to="/locations">
          Locations
        </Link>
      </li>
      <li className="navbar_item active">
        <Link className="navbar_link" to="/products">
          Products
        </Link>
      </li>
      <li className="navbar_item active">
        <Link className="navbar_link" to="/employees">
          Employees
        </Link>
      </li>
      <li className="navbar_item active">
        <Link className="navbar_link" to="/customers">
          Customers
        </Link>
      </li>
    </ul>
  );
};
