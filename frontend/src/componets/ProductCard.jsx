import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import axios from "axios"; 

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching products...");
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div
      style={{
        marginLeft: "40px",
        marginTop: "30px",
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        justifyItems: "center", 
      }}
    >
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              border: "1px solid black",
              borderRadius: "20px",
              backgroundColor: "SlateBlue",
              padding: "10px",
              marginBottom: "10px",
              width: "300px", 
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{
                  borderRadius: "30px",
                  color: "beige",
                  backgroundColor: "black",
                  height: "50px",
                  lineHeight: "50px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold",
                  width: "100px",
                }}
              >
                <FaEdit />
              </button>
              <button
                style={{
                  borderRadius: "30px",
                  color: "beige",
                  backgroundColor: "black",
                  height: "50px",
                  lineHeight: "50px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold",
                  width: "100px",
                }}
              >
                <MdDelete />
              </button>
              <button
                style={{
                  borderRadius: "30px",
                  color: "beige",
                  backgroundColor: "black",
                  height: "50px",
                  lineHeight: "50px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold",
                  width: "100px",
                }}
              >
                <IoReorderFour />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductCard;
