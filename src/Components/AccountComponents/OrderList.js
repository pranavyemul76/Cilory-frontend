import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Style/Account/order.css";
import Order from "./Order";
import Skeleton from "../Notifications/Skeleton";
function OrderList({ orderdata }) {
  return (
    <>
      <h4 className=" your-order-header">
        Your Orders <span>({orderdata?.OrderData?.orders?.length})</span>
      </h4>
      <Row className="justify-content-md-start orderlistrow">
        <Col lg={12} xs={12}>
          {orderdata?.loader ? (
            <Skeleton />
          ) : (
            orderdata?.OrderData?.orders?.map((i, index) => {
              return (
                <Link to={`/oderdetail/${i._id}`} key={index}>
                  <Order i={i} />
                </Link>
              );
            })
          )}
        </Col>
      </Row>
    </>
  );
}

export default OrderList;
