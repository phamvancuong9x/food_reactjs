import { useEffect, useState } from "react";
import homeApi from "../../api/homeApi";
import Banner from "./components/Banner";
import CategoryHome from "./components/CategoryHome";
import SliderHome from "./components/SliderHome";
import SliderText from "./components/SliderText";
import "./styles.scss";

function HomePage() {
  const [slider, setSlider] = useState([]);
  console.log(slider);
  useEffect(() => {
    (async () => {
      const sliderList = await homeApi.getAll();
      setSlider(sliderList);
    })();
  }, []);

  return (
    <div className="content">
      <div className="slider-home-main">
        <SliderHome slider={slider} />
        <SliderText />
      </div>
      <Banner />
      <CategoryHome />
    </div>
  );
}

export default HomePage;
