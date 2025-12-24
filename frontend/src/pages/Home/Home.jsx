import React, { useEffect } from "react";
// import { Outlet } from 'react-router'
import Featured from "../../Components/Featured/Featured";
import Trustedby from "../../Components/Trustedby/Trustedby";
import Footer from "../../Components/Footer/Footer";
import Slide from "../../Components/slide/slide.jsx";
import { cards } from "../../data.js";
import { productData } from "@/data.js";
import Features from "../../Components/Features/Features";
// import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const storeduser = localStorage.getItem("currentUser");
    if (!storeduser) {
      navigate("/login");
    }
    const user = JSON.parse(storeduser);
    console.log(user);
  }, [navigate]);
  return (
    <div className="w-[99vw] h-auto p-1 bg-white">
      <Featured />
      <Trustedby />
      <Slide cards={cards} />
      <Features />
      <Slide cards={productData} />
      <Footer />
    </div>
  );
};

export default Home;
