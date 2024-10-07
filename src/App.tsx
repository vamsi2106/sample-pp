import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage"; // Assuming you have a HomePage component
import CartPage from "./Pages/CartPage"; // Assuming you have a CartPage component
import ProductPage from "./Pages/ProductsPage"; // Assuming you have a ProductPage component
// import ProtectedRoute from './routes/ProtectedRoute'; // Commented for future use
import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
       
       
        {/* Uncomment and adjust the following line for future use
        <Route element={<ProtectedRoute />}>
          <Route path="/protected" element={<ProtectedComponent />} />
        </Route>
        */}

        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
