import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import homeApi from "../../../api/homeApi";
import Image from "../../../components/Image";

function SliderItem({ sliderData }) {
  return (
    <div>
      <Image
        className={`slider_desktop`}
        srcImage={sliderData.image_slider_desktop}
      />
    </div>
  );
}
function SliderHome() {
  const initSlider = JSON.parse(sessionStorage.getItem("sliderHome") || "[]");

  const [slider, setSlider] = useState(initSlider);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (initSlider.length !== 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    (async () => {
      try {
        console.log("loading");
        const sliderList = await homeApi.getAll();
        setSlider(sliderList);
        sessionStorage.setItem("sliderHome", JSON.stringify(sliderList));
        setLoading(false);
      } catch (error) {
        console.log(error.name);
        setLoading(true);
      }
    })();
  }, []);

  if (!slider) return <></>;
  const sliderReverse = [...slider].reverse();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="slider-home">
      {initSlider.length !== 0 && (
        <Link to={"/category-product"} className="slider-header__item">
          <Slider {...settings}>
            {sliderReverse.map((sliderData, i) => {
              return (
                <SliderItem sliderData={sliderData} index={i + 1} key={i} />
              );
            })}
          </Slider>
        </Link>
      )}
      {loading && (
        <Skeleton animation="wave" variant="rectangular" height={"600px"} />
      )}
    </div>
  );
}

export default SliderHome;
