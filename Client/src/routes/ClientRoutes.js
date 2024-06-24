import React from "react";
import { Route, Routes } from "react-router-dom";
import config from "../config/routes";
import { AuthProvider } from "../AuthContext";
import Home from "../pages/Client/Home/Home";
import Login from "../layouts/components/Login/Login";
import Register from "../layouts/components/Register/Register";
import UserProfile from "../pages/Client/UserProfile/Profile";
import Filtered from "../pages/Client/Filtered/Filtered";
import ProductDetails from "../pages/Client/Products/ProductDetails/ProductDetails";
import FashionConsultant from "../layouts/components/FashionConsultant/FashionConsultant";
const ClientRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path={config.home} element={<Home />} />
        <Route path={config.login} element={<Login />} />
        <Route path={config.register} element={<Register />} />
        <Route path={config.profile} element={<UserProfile />} />
        <Route path={config.filtered} element={<Filtered />} />
        <Route path={config.productDetails} element={<ProductDetails />} />
        <Route
          path={config.fashionConsultant}
          element={<FashionConsultant />}
        />
      </Routes>
    </AuthProvider>
  );
};

export default ClientRoutes;
