import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateProduct = ({ setIsUpdateFormOpen, productData }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      id_pr: productData.id_pr || "",
      priceProduct: productData.priceProduct || "",
      productName: productData.productName || "",
      sub_cat: productData.sub_cat || "",
      code_cat: productData.code_cat || "",
      size: productData.size || "",
      soluong: productData.soluong || "",
      goWhere: productData.goWhere || "",
      styleFilter: productData.styleFilter || "",
      eventFilter: productData.eventFilter || "",
      productColor: productData.productColor || "", // Thêm trường productColor
    });
  }, [productData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/product/update/`,
        formData
      );

      setIsUpdateFormOpen(false);
      if (response.data.ok) {
        setFormData(response.data.formData);
        alert("Cập nhật sản phẩm thành công");
      } else {
        alert(response.data.mess);
      }
    } catch (error) {
      if (error.response) {
        console.error("Lỗi từ server:", error.response.data);
        alert(
          `Lỗi cập nhật sản phẩm: ${
            error.response.data.message || error.response.data
          }`
        );
      } else {
        console.error("Lỗi khi tạo yêu cầu:", error.message);
        alert("Lỗi khi tạo yêu cầu. Vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setIsUpdateFormOpen(false)}>
          &times;
        </span>
        <h3>Cập nhật sản phẩm</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id_pr"
            placeholder="ID sản phẩm"
            value={formData.id_pr}
            onChange={handleInputChange}
            disabled
            required
          />
          <input
            name="priceProduct"
            placeholder="Giá sản phẩm"
            value={formData.priceProduct}
            onChange={handleInputChange}
            type="text"
            required
          />
          <input
            name="productName"
            placeholder="Tên sản phẩm"
            value={formData.productName}
            onChange={handleInputChange}
            type="text"
            required
          />
          <input
            name="sub_cat"
            placeholder="Loại"
            value={formData.sub_cat}
            onChange={handleInputChange}
            type="text"
            required
          />
          <input
            name="code_cat"
            placeholder="Mã loại"
            value={formData.code_cat}
            onChange={handleInputChange}
            type="text"
            required
          />
          <input
            name="soluong"
            placeholder="Số lượng"
            value={formData.soluong}
            onChange={handleInputChange}
            type="number"
            required
          />
          {/* Thay thế input "Đi đâu" bằng select */}
          <select
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
          >
            <option value="">Chọn kích cỡ</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          
          <select
            name="goWhere"
            value={formData.goWhere}
            onChange={handleInputChange}
            required
          >
            <option value="">Chọn Đi đâu</option>
            <option value="Công việc">Công việc</option>
            <option value="Thể thao">Thể thao</option>
            <option value="Hẹn hò">Hẹn hò</option>
            <option value="Du lịch">Du lịch</option>
          </select>

          <select
            name="styleFilter"
            value={formData.styleFilter}
            onChange={handleInputChange}
            required
          >
            <option value="">Chọn Phong cách</option>
            <option value="Năng động">Năng động</option>
            <option value="Giản dị">Giản dị</option>
            <option value="Thanh lịch">Thanh lịch</option>
            <option value="Cổ điển">Cổ điển</option>
            <option value="Đường phố">Đường phố</option>
            <option value="Lãng mạng">Lãng mạng</option>
            <option value="Trẻ trung">Trẻ trung</option>
          </select>

          {/* Thay thế input "Sự kiện đặc biệt" bằng select */}
          <select
            name="eventFilter"
            value={formData.eventFilter}
            onChange={handleInputChange}
            required
          >
            <option value="">Chọn Sự kiện đặc biệt</option>
            <option value="Tết">Tết</option>
            <option value="Lễ tình nhân">Lễ tình nhân</option>
            <option value="Triển lãm">Triển lãm</option>
            <option value="Lễ hội">Lễ hội</option>
            <option value="Sinh nhật">Sinh nhật</option>
          </select>

          {/* Thêm mục chọn màu */}
          <select
            name="productColor"
            value={formData.productColor}
            onChange={handleInputChange}
            required
          >
            <option value="">Chọn màu</option>
            <option value="Trắng">Trắng</option>
            <option value="Đỏ">Đỏ</option>
            <option value="Tím">Tím</option>
            <option value="Vàng">Vàng</option>
            <option value="Đen">Đen</option>
            <option value="Xám">Xám</option>
            <option value="Xanh dương">Xanh dương</option>
            <option value="Ghi">Ghi</option>
            <option value="Tím than">Tím than</option>
            <option value="Nâu">Nâu</option>
            <option value="Nâu">Nâu</option>
            <option value="Nâu">Nâu</option>
            <option value="Xanh lá cây">Xanh lá cây</option>
            <option value="Hồng">Hồng</option>
          </select>

          <button type="submit">Cập nhật sản phẩm</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
