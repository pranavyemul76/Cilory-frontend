import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import RightTick from "../CheckOutComponents/RightTick";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { instance } from "../../Services/Axiosservices";

import "../../Style/FilterPage/Checkout/payment.css";
function Payment({ value }) {
  const navigate = useNavigate();
  const [loading, setloading] = useState({
    inti: false,
    process: false,
    done: false,
  });
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_OuUA2iA1dTEcLu",
      amount: data.amount,
      currency: data.currency,
      name: "iuteiy",
      description: "Test Transaction",
      image: "https://static.cilory.com/img/logo.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "/verify";
          const { data } = await instance.post(verifyUrl, response);
          console.log(data);
          setloading({ ...loading, init: false });
          navigate("");
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const handlePayment = async (value) => {
    setloading({ ...loading, init: true });
    try {
      const orderUrl = "/orders";
      const { data } = await instance.post(orderUrl, { amount: value * 100 });
      setloading({ ...loading, init: false });
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const cashondelivery = () => {
    setloading({ ...loading, init: true });
    setTimeout(() => {
      setloading({ ...loading, done: true });
    }, 6000);
    setTimeout(() => {
      navigate("/");
    }, 8000);
  };
  return (
    <Col lg={6} xs={11} className="payment-section">
      <Tab.Container id="left-tabs-example" defaultActiveKey="second">
        <Row>
          <Col sm={4}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  onClick={() => {
                    handlePayment(value);
                  }}
                >
                  Net Banking
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Cash on Delivery </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8} className="right-payment-info">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {loading.init && (
                  <div className="payment-loading">
                    <Spinner animation="grow" variant="info" />
                    <div> initialize payment please wait...</div>
                  </div>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  <Col xs={12} className="payment-title">
                    cash on delivery
                  </Col>
                  <hr />
                  <Col xs={12} className="payment-description">
                    <div className="payment-info">
                      Cash on Delivery service is not available at the selected
                      address.
                    </div>
                  </Col>
                  <Col xs={12} className="payment-button">
                    {loading.done ? (
                      <RightTick></RightTick>
                    ) : (
                      <button onClick={cashondelivery}>
                        {!loading.init ? (
                          "place order"
                        ) : (
                          <>
                            <span style={{ "--i": "0.4s" }}></span>
                            <span style={{ "--i": "0.8s" }}></span>
                            <span style={{ "--i": "1.0s" }}></span>
                          </>
                        )}
                      </button>
                    )}
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Col>
  );
}

export default Payment;
