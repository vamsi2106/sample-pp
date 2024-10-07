// AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
// Optional 404 component

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
