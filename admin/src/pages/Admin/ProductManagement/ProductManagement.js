// ProductManagement.js
import React, { useState, useEffect } from "react";
import "./ProductManagement.css";
import AdminHeader from "../../../AdminLayout/components/AdminHeader/AdminHeader";
import AdminSideBar from "../../../AdminLayout/components/AdminSideBar/AdminSideBar";
import axios from "axios";
import AddProduct from "./AddProduct/AddProduct";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import DeleteProduct from "./DeleteProduct/DeleteProduct"; // Import DeleteProduct component

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
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

    fetchProduct();
  }, []);

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setIsUpdateFormOpen(true);
  };

  const handleProductDelete = (deletedProductId) => {
    setProducts(
      products.filter((product) => product.id_pr !== deletedProductId)
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="admin_sidebar">
      <AdminSideBar />
      <div className="admin_header">
        <AdminHeader />
        <div className="table-pm">
          <div className="table-pm__header">
            <h3>Product Management</h3>
            <input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setIsAddFormOpen(!isAddFormOpen)}>
              {isAddFormOpen ? "Thêm sản phẩm" : "Thêm sản phẩm"}
            </button>
          </div>
          <table className="table">
            <thead className="table_thread">
              <tr>
                <th>Ảnh</th>
                <th>ID</th>
                <th>Giá</th>
                <th>Tên sản phẩm</th>
                <th>Loại</th>
                <th>Mã loại</th>
                <th>Màu</th>
                <th>Kích cỡ</th>
                <th>Số lượng</th>
                <th>Để đi</th>
                <th>Phong cách</th>
                <th>Sự kiện</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id_pr}>
                  <td>
                    <img
                      src={product.imageProduct}
                      alt={product.productName}
                      style={{ width: "25%", height: "25%" }}
                    />
                  </td>
                  <td>{product.id_pr}</td>
                  <td>{product.priceProduct}</td>
                  <td>{product.productName}</td>
                  <td>{product.sub_cat}</td>
                  <td>{product.code_cat}</td>
                  <td>{product.productColor}</td>
                  <td>{product.size}</td>
                  <td>{product.soluong}</td>
                  <td>{product.goWhere}</td>
                  <td>{product.styleFilter}</td>
                  <td>{product.eventFilter}</td>
                  <td className="btn-update-delete">
                    <button onClick={() => handleUpdateClick(product)}>
                      Cập nhật
                    </button>{" "}
                    <DeleteProduct
                      id={product.id_pr}
                      onDelete={handleProductDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isAddFormOpen && <AddProduct setIsAddFormOpen={setIsAddFormOpen} />}
        {isUpdateFormOpen && selectedProduct && (
          <UpdateProduct
            setIsUpdateFormOpen={setIsUpdateFormOpen}
            productData={selectedProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
