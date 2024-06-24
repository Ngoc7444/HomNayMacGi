import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import config from "../config/routes";
import ProductManagement from "../pages/Admin/ProductManagement/ProductManagement";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path={config.admin.dashboard} element={<Dashboard />} />
      <Route
        path={config.admin.productManagement}
        element={<ProductManagement />}
      />
      <Route path={config.admin.userManagement} element={<UserManagement />} />
    </Routes>
  );
};

export default AdminRoutes;
