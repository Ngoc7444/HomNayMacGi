import React from "react";
// import AdminHeader from "../components/AdminHeader"; // Component header for admin
import "./AdminLayout.css"; // CSS cho layout admin
import AdminSideBar from "../components/AdminSideBar/AdminSideBar";
import AdminHeader from "../components/AdminHeader/AdminHeader";
import ProductManagement from "../../pages/Admin/ProductManagement/ProductManagement";
import { Route, Routes } from "react-router-dom";
import config from "../../config/routes";
import UserManagement from "../../pages/Admin/UserManagement/UserManagement";
const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminSideBar />
      <div className="admin-layout__content">
        <AdminHeader />
        <div className="admin-layout__main">
          <Routes>
            <Route
              path={config.admin.productManagement}
              element={<ProductManagement />}
            />
            <Route
              path={config.admin.userManagement}
              element={<UserManagement />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
