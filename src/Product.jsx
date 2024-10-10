import React from "react";
import "./ProductTab.css";
function Product({ title, price }) {
    return (
        <>
            <div className="Product">
                <h3>{title}</h3>
                <h5>Intuitive Surface</h5>
                <h5>Designed for iPad Pro</h5>
                <h5>Price: {price}</h5>
            </div>
        </>
    );
}

export default Product