import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Components.css";
import Blackstar from "../Images/BlackStar.png";
import Arrow1 from "../Images/Arrow1.png";
import Arrow2 from "../Images/Arrow2.png";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProds(res.data));
  }, []);

  return (
    <div className="newProducts">
      <div className="headernp">
        <div>
          <h2>New Products</h2>
          <div className="np1">
            <img src={Blackstar} alt="star" />
            <hr />
          </div>
        </div>
        <div className="np2">
          <img src={Arrow2} alt="arrow" />
          <img src={Arrow1} alt="arrow"  />
        </div>
      </div>
      <div className="categoriesNproducts">
        <div className="categories">
          <span>Apparel</span>
          <span>Accessories</span>
          <span>Best Sellers</span>
          <span>50% Off</span>
        </div>
        <div className="products" >
          {prods.map((item) => {
            return <ProductCard  key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
