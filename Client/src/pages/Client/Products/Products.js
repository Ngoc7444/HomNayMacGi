import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css"; // Import file CSS cho component này
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/product/"
        );
        const data = response.data;
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          throw new Error("Expected an array of Product");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id_pr}>
          <img
            className="product-image"
            src={product.imageProduct}
            alt={product.productName}
          />
          <div className="product-details">
            <h2>{product.productName}</h2>
            <p>Giá: {product.priceProduct} $</p>
            <Link
              to={`/product-details/${product.id_pr}`}
              className="product-button"
            >
              Chi tiết sản phẩm
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
