import React, { useState } from "react";

function DetailProductImage({ imageList }) {
  const [imageActive, setImageACtive] = useState(imageList[0]);

  const handleCLickImage1 = () => {
    setImageACtive(imageList[0]);
  };
  const handleCLickImage2 = () => {
    setImageACtive(imageList[1]);
  };
  return (
    <div className="detail-product">
      <div className="detail-big">
        <img src={imageActive} alt="" className="detail-img" />
      </div>
      <div className="detail-small">
        <img
          src={imageList[0]}
          alt=""
          className={
            imageActive !== imageList[0]
              ? "detail-small-img "
              : "detail-small-img detail-small-img-active"
          }
          onClick={handleCLickImage1}
        />
        <img
          src={imageList[1]}
          alt=""
          className={
            imageActive !== imageList[1]
              ? "detail-small-img "
              : "detail-small-img detail-small-img-active"
          }
          onClick={handleCLickImage2}
        />
      </div>
    </div>
  );
}

export default DetailProductImage;
