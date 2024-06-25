import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import Header from "../../../../layouts/components/Header/Header";
const ProductDetail = () => {
  const { id_pr } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product/${id_pr}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.product);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id_pr]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <div className=" p-0 ">
            <Header />
          </div>
        </div>
        <div className="col-10">
          <div className=" p-1">
            <div className="product-detail">
              <div className="product-detail__image">
                <img src={product.imageProduct} alt={product.productName} />
              </div>
              <div className="product-detail__info">
                <h1>{product.productName}</h1>
                <p>{product.descriptionProduct}</p>
                <p className="product-detail__price">
                  {product.priceProduct} VNĐ
                </p>
                <Link to={"/"}>
                  <button>Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
