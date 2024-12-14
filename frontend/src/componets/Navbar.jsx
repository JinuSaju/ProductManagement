// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      gap: "20px",
      backgroundColor: "SlateBlue",
      width: "250px",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      height: "100vh",
    }}>
      <h2>Product Management</h2>

      <Link
        to="/"
        style={{
          display: "block",
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          textDecoration: "none",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Home
      </Link>

      <Link
        to="/add-product"
        style={{
          display: "block",
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          textDecoration: "none",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Add Product
      </Link>
    </div>
  );
}

export default Navbar;
