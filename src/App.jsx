import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/UserAuthentication/Login";
import Home from "./components/Home/Home";
import { useAuth } from "./components/UserAuthentication/useAuth";
import Cart from "./components/CartProducts/CartProducts";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          isAuthenticated() ? <PrivateRoutes /> : <Navigate to="/login" />
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
