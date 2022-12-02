import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "../../Style/FilterPage/ProductCard.css";
function ProductCard({ item }) {
  const [imgload, setimgload] = useState(true);

  return (
    <div className="ProductCard">
      <div>
        <div className={imgload ? "imageload" : ""}>
          <Image
            src={item.searchImage}
            alt="none"
            className="w-100"
            onLoad={() => setimgload(false)}
          />
        </div>
        <div className="Productinfo">
          <div className="ProductName">Product Name</div>
          <div className="ProductPrice">
            <span className="price">Rs 300</span>

            <span className="mrp">Rs.400</span>
            <span className="discount">(50% OFF)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
