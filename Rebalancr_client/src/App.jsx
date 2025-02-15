import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KnowMore from "./pages/KnowMore";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="bg-[#0D0F1F] text-[#E0E0E0] min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<KnowMore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;