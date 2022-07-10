import { useEffect, useState } from "react";
import homeApi from "../../api/homeApi";
import Banner from "./components/Banner";
import CategoryHome from "./components/CategoryHome";
import SliderHome from "./components/SliderHome";
import SliderText from "./components/SliderText";
import "./styles.scss";

function HomePage() {
  return (
    <div className="content">
      <div className="slider-home-main">
        <SliderHome />
        <SliderText />
      </div>
      <Banner />
      <CategoryHome />
    </div>
  );
}

export default HomePage;
