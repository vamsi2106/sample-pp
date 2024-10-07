import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
