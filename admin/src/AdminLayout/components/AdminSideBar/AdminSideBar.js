import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import "./AdminSideBar.css";

const AdminSideBar = () => {
  const [openMenus, setOpenMenus] = useState({
    consultation: false,
    invoice: false,
    employee: false,
    supplier: false,
  });

  const handleMenuToggle = (menuName) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menuName]: !prevOpenMenus[menuName],
    }));
  };

  return (
    <div className="admin-sidebar">
      <div className="admin-inner">
        <div className="admin-sidebar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="admin-sidebar__user">
          <span>Admin</span>
        </div>
        <div className="admin-sidebar__menu">
          <div className="admin-sidebar__menu__dashboard">
            <Link to="/admin" className="admin-sidebar__menu__item">
              Trang chủ
            </Link>
          </div>
          <div
            className="admin-sidebar__menu__item"
            onClick={() => handleMenuToggle("consultation")}
          >
            <span>Tư vấn ăn mặc</span>
            {openMenus.consultation && (
              <div className="admin-sidebar__menu__sub">
                <Link
                  to="/admin/manage-users"
                  className="admin-sidebar__menu__sub__item"
                >
                  Quản lý tài khoản
                </Link>
                <Link
                  to="/admin/manage-outfit"
                  className="admin-sidebar__menu__sub__item"
                >
                  Quản lý outfit
                </Link>
                <Link
                  to="/admin/manage-products"
                  className="admin-sidebar__menu__sub__item"
                >
                  Quản lý sản phẩm
                </Link>
              </div>
            )}
          </div>
          <div
            className="admin-sidebar__menu__item"
            onClick={() => handleMenuToggle("invoice")}
          >
            <span>Quản lý hóa đơn</span>
            {openMenus.invoice && (
              <div className="admin-sidebar__menu__sub">
                <Link
                  to="/admin/manage-invoices"
                  className="admin-sidebar__menu__sub__item"
                >
                  Quản lý hóa đơn
                </Link>
                <Link
                  to="/admin/manage-invoice-details"
                  className="admin-sidebar__menu__sub__item"
                >
                  Quản lý chi tiết hóa đơn
                </Link>
              </div>
            )}
          </div>
          <div
            className="admin-sidebar__menu__item"
            onClick={() => handleMenuToggle("employee")}
          >
            <span>Quản lý nhân viên</span>
            {openMenus.employee && (
              <div className="admin-sidebar__menu__sub">
                <Link
                  to="/admin/add-employee"
                  className="admin-sidebar__menu__sub__item"
                >
                  Thêm nhân viên
                </Link>
                <Link
                  to="/admin/edit-employee"
                  className="admin-sidebar__menu__sub__item"
                >
                  Chỉnh sửa nhân viên
                </Link>
                <Link
                  to="/admin/delete-employee"
                  className="admin-sidebar__menu__sub__item"
                >
                  Xóa nhân viên
                </Link>
              </div>
            )}
          </div>
          <div
            className="admin-sidebar__menu__item"
            onClick={() => handleMenuToggle("supplier")}
          >
            <span>Quản lý nhà cung cấp</span>
            {openMenus.supplier && (
              <div className="admin-sidebar__menu__sub">
                <Link
                  to="/admin/add-supplier"
                  className="admin-sidebar__menu__sub__item"
                >
                  Thêm nhà cung cấp
                </Link>
                <Link
                  to="/admin/edit-supplier"
                  className="admin-sidebar__menu__sub__item"
                >
                  Chỉnh sửa nhà cung cấp
                </Link>
                <Link
                  to="/admin/delete-supplier"
                  className="admin-sidebar__menu__sub__item"
                >
                  Xóa nhà cung cấp
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
