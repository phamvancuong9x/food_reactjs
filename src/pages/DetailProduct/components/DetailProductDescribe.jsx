import React from "react";

function DetailProductDescribe({ imageProduct, describe_1, describe_2 }) {
  if (!imageProduct || imageProduct.length === 0) return <></>;

  return (
    <div id="menu1" className="tab-content active">
      <p className="tab-text">{describe_1}</p>
      <p className="tab-text">
        <img src={imageProduct[0]} alt="" />
      </p>
      <p className="tab-text">{describe_2}</p>
      <p className="tab-text">
        <img src={imageProduct[1]} alt="" />
      </p>
    </div>
  );
}

export default DetailProductDescribe;
