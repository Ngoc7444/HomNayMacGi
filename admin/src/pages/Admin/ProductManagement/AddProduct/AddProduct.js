import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ setIsAddFormOpen }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    imageProduct: null,
    id_pr: "",
    priceProduct: "",
    productName: "",
    sub_cat: "",
    code_cat: "",
    goWhere: "", // Thay thế input bằng select
    styleFilter: "", // Thay thế input bằng select
    eventFilter: "", // Thay thế input bằng select
    productColor: "", // Thêm mục chọn màu
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      imageProduct: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append("id_pr", formData.id_pr);
    formDataWithImage.append("priceProduct", formData.priceProduct);
    formDataWithImage.append("productName", formData.productName);
    formDataWithImage.append("sub_cat", formData.sub_cat);
    formDataWithImage.append("code_cat", formData.code_cat);
    formDataWithImage.append("size", formData.size);
    formDataWithImage.append("soluong", formData.soluong);
    formDataWithImage.append("goWhere", formData.goWhere);
    formDataWithImage.append("styleFilter", formData.styleFilter);
    formDataWithImage.append("eventFilter", formData.eventFilter);
    formDataWithImage.append("productColor", formData.productColor);
    formDataWithImage.append("imageProduct", formData.imageProduct);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/product/",
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsAddFormOpen(false);
      console.log(response.data);
      if (response.data.ok) {
        alert("Thêm sản phẩm thành công");
        navigate("/admin/manage-products", { replace: true });
      } else {
        alert(response.data.mess);
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi thêm sản phẩm:", error);
      alert("Đã xảy ra lỗi khi thêm sản phẩm. Vui lòng thử lại.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setIsAddFormOpen(false)}>
          &times;
        </span>
        <h3>Tạo sản phẩm mới</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <input
            type="text"
            name="id_pr"
            placeholder="ID sản phẩm"
            value={formData.id_pr}
            onChange={handleInputChange}
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

          {/* Thay thế input "Đi đâu" bằng select */}
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

          {/* Thay thế input "Phong cách" bằng select */}
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
            <option value="Cam">Cam</option>
            <option value="Bê">Bê</option>
            <option value="Xanh lá cây">Xanh lá cây</option>
            <option value="Hồng">Hồng</option>
          </select>

          <button type="submit">Thêm sản phẩm</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
