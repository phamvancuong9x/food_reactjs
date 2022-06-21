import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
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
function SliderHome({ slider }) {
  if (!slider) return <></>;
  const sliderReverse = [...slider].reverse();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-home">
      <Link to={"/category-product"} className="slider-header__item">
        <Slider {...settings}>
          {sliderReverse.map((sliderData, i) => {
            return <SliderItem sliderData={sliderData} index={i + 1} key={i} />;
          })}
        </Slider>
      </Link>
    </div>
  );
}

export default SliderHome;
