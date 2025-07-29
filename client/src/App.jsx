import React from "react";
import { Routes, Route } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit.jsx";
import Home from './pages/Home.jsx';
import Result from './pages/Result.jsx';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { SignInButton } from "@clerk/clerk-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position="bottom-right"/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
