import React from "react";
import "./ProductTab.css";
function Product({ title, text1, text2, price }) {
  return (
    <>
      <div className="Product">
        <h3>{title}</h3>
        <h5>{text1}</h5>
        <h5>{text2}</h5>
        <h5 id="price">{price}</h5>
      </div>
    </>
  );
}

export default Product;
