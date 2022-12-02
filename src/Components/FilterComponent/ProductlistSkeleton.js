import React from "react";
import { Col } from "react-bootstrap";
import "../../Style/FilterPage/Productlistskeleton.css";

function ProductlistSkeleton() {
  return (
    <>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ].map((ske, i) => {
        return (
          <Col className="">
            <div class="card">
              <div class="card__image loading"></div>
              <div class="card__title loading"></div>
              <div class="card__description loading"></div>
            </div>
          </Col>
        );
      })}
    </>
  );
}
export default ProductlistSkeleton;
