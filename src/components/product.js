import React from "react";
import "../style.css";

import products from "./productsList";



const ProductList = () => {
  return (
    <div>
      <h1 className="maintitle">BD STORE</h1>
      {products.map((product) => {
        return (
          <div className="card">
            <img src={product.image} alt="" />
            <h3 className="cardtitle">{product.title}</h3>
            <p className="cardPrice"> Price: ${product.price}</p>
            <p className="cardRating"> Rating: {product.rating} /5</p>
            <p className="carddesc">{product.description}</p>
            <button className="cardButton">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
