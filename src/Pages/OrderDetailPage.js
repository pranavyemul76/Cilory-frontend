import React from "react";
import { Container, Row, Col, Breadcrumb, Image } from "react-bootstrap";
import "../Style/Account/orderdetail.css";
function OrderDetailPage() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Container>
      <Row className="justify-content-center Order-detail-section-breadcrumb">
        <Col xs={11} lg={10}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3 px-4">
        <Col xs={12} lg={10}>
          <h4>Expected Delivery : 23 oct 2080</h4>
        </Col>
      </Row>

      <Row className="justify-content-center Order-detail-section-row">
        <Col xs={11} lg={10}>
          <Row className="Top-side-order-detail-section mb-4">
            <Col xs={12} lg={4} className="order-address-section">
              <div className="order-address-heading">
                <span>Delivery Address</span>
              </div>
              <div className="order-details">
                <div className="order-detail-name">Pranav</div>
                <div className="order-address">
                  101 a 100 Bhavani peth, Water tank Solapur - 413002,
                  Maharashtra
                </div>
                <div className="order-detail-phone">
                  <div>Phone Number</div>
                  <span>9049263174,</span>
                  <span>7888261848</span>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} className="order-payment-section">
              <div className="order-payment-heading">
                <span>Payment Method</span>
              </div>
              <div className="order-payment-detail">
                <div>card</div>
                <span>0000</span>
              </div>
            </Col>
            <Col xs={12} lg={4} className="order-summary-section">
              <div className="order-summary-heading">
                <span>Order summary</span>
              </div>
              <div className="order-summary">
                <div>
                  <span>item subtotal</span>
                  <span>1234</span>
                </div>
                <div>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>1000</span>
                </div>
                <div>
                  <span>Grand Total</span>
                  <span>10000</span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={11} lg={10}>
          <Row className="order-product-detail-section">
            <Col lg={1} xs={3} className="order-product-detail-image">
              <Image
                className="w-100"
                src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg"
              />
            </Col>
            <Col lg={2} xs={8}>
              <div>
                <div className="order-product-name">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
                <div className="order-product-size">
                  Size : <span>L</span>
                </div>
                <div className="order-product-color mx-lg-0 mx-4">
                  Color : <span>L</span>
                </div>
                <div>
                  Price : <span>1234</span>
                </div>
              </div>
            </Col>
            <Col lg={7} xs={12} className="order-tracking-section">
              <div className="order-tracking completed">
                <span className="is-complete"></span>
                <p>
                  Ordered
                  <br />
                  <span>Mon, June 24</span>
                </p>
              </div>
              <div className="order-tracking completed">
                <span className="is-complete"></span>
                <p>
                  Shipped
                  <br />
                  <span>Tue, June 25</span>
                </p>
              </div>
              <div className="order-tracking">
                <span className="is-complete"></span>
                <p>
                  Delivered
                  <br />
                  <span>Fri, June 28</span>
                </p>
              </div>
            </Col>
            <Col lg={2} xs={12} className="order-write-review">
              Write Review
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderDetailPage;
