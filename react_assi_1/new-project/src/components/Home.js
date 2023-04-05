import React from "react";
import AppCarousel from "./Carousel";
import ProductList from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <AppCarousel />
      <h1 className="home-title" style={{ textAlign:"center" , marginTop:"20px"}}>Buy Your Dream Laptop..... </h1>
        <ProductList />

    </div>
  );
}

export default Home;
