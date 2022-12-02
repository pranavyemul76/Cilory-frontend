import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/FilterPage/Checkout/checkout.css";
import Cart from "../Components/CheckOutComponents/cart";
import Address from "../Components/CheckOutComponents/address";
import Payment from "../Components/CheckOutComponents/Payment";
function CheckOutPage() {
  const { checkout } = useParams();
  const navigate = useNavigate();

  const handelnavigate = () => {
    if (checkout === "cart") {
      navigate("/checkout/address");
    } else if (checkout === "address") {
      navigate("/checkout/payment");
    }
  };
  return (
    <Container>
      {checkout === "cart" && (
        <Row>
          <h3 className="checkoutHeading">Shopping Bag (Cart Count)</h3>
        </Row>
      )}
      {checkout === "address" && (
        <Row>
          <h3 className="checkoutHeading">Select Address</h3>
        </Row>
      )}
      {checkout === "payment" && (
        <Row>
          <h3 className="checkoutHeading">Payment</h3>
        </Row>
      )}
      <Row className="justify-content-center checkoutrow">
        {checkout === "cart" && (
          <Col lg={6} xs={12} className="cartcol">
            <Cart />
          </Col>
        )}
        {checkout === "address" && (
          <Col lg={6} xs={10}>
            {<Address />}
          </Col>
        )}
        {checkout === "payment" && <Payment />}
        <Col className="PriceCalculation p-4 pt-0" lg={3} xs={12}>
          <div className="PriceDeatil">
            <i className="fa-solid fa-tag"></i>
            <span>Price Detail</span>
          </div>
          <Row className="justify-content-md-center">
            <Col lg={7} xs={7} className="subtotal">
              Subtotal
            </Col>
            <Col lg={5} xs={5} className="subtotalprice text-end">
              ₹ cart total
            </Col>
            <Col lg={7} xs={7} className="subtotal">
              Discount
            </Col>
            <Col lg={5} xs={5} className="subtotalprice text-end">
              -₹ discount cut
            </Col>
            <Col lg={7} xs={7} className="shipping">
              Shipping
            </Col>
            <Col lg={5} xs={5} className="shippingprice text-end">
              Free
            </Col>
            <Col lg={7} xs={7} className="total">
              Total<span>(Incl. of all taxes)</span>
            </Col>
            <Col lg={5} xs={5} className="totalprice text-end">
              ₹ cart price
            </Col>
            {
              <Col lg={12} xs={12} className="ByeNow">
                <div className="ByeNowBox">
                  <div className="ByeNowtotal">₹ cart value</div>
                  <button onClick={handelnavigate}>
                    {false === "cart"
                      ? "proceed to Bye"
                      : false === "address"
                      ? "delivery here"
                      : "Bye Now"}
                  </button>
                </div>
              </Col>
            }
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default CheckOutPage;
