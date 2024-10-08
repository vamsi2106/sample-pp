import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductsPage";
import LoginPage from "./Pages/LoginPage"; // New LoginPage
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProtectedRoute from "./routes/ProtectedRoute"; // Import the new ProtectedRoute

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Login route */}
        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
