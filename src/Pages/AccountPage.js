import React, { useEffect } from "react";
import "../Style/Account/overview.css";
import { Tab, Container, Row, Col, Nav, Image, Spinner } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetUserOrders } from "../store/Logic/Account/AccountSlice";
import AddressList from "../Components/CheckOutComponents/AddressList";

import OrderList from "../Components/AccountComponents/OrderList";
import { UserLogin } from "../store/Logic/User/UserSlice";

function AccountPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderdata = useSelector((state) => {
    return state.AccountDetail;
  });
  const userlofin = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    dispatch(GetUserOrders());
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [slug]);
  return (
    <Container className="overview-section">
      <Tab.Container id="left-tabs-example" activeKey={slug}>
        <Row className="justify-content-center overview-row">
          <Col sm={2}>
            <Nav variant="pills" className="flex-column overviewtabs">
              <Nav.Item onClick={() => navigate("/account/overview")}>
                <Nav.Link eventKey="overview">overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="address"
                  onClick={() => navigate("/account/address")}
                >
                  address
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="orders"
                  onClick={() => {
                    navigate("/account/orders");
                  }}
                >
                  orders
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              <Tab.Pane eventKey="overview">
                <div className="overview">
                  <h5 className="overview-heading">overview</h5>
                  <div className="overview-profile-section">
                    <div>
                      <Image
                        src="https://i.pinimg.com/564x/0b/b2/b6/0bb2b6e219cd33bcbc675c567a8ad42d.jpg"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="user-name">user name</div>
                    <div className="user-phone">9049263174</div>
                    <div className="profile-edit">Edit</div>
                  </div>
                  <br />

                  <div className="see-orders">
                    <h5 className="your-orders-heading">Your orders</h5>
                    <div
                      className="view-orders"
                      onClick={() => navigate("/account/orders")}
                    >
                      view all
                    </div>
                  </div>

                  <div className="your-orders">
                    {orderdata.orderloader ? (
                      <>
                        <div className="d-flex justify-content-center align-items-center">
                          <Spinner animation="grow" variant="info" />
                        </div>
                      </>
                    ) : orderdata?.OrderData?.orders?.length >= 1 ? (
                      <Link
                        to={`/oderdetail/${orderdata.OrderData.orders[0]._id}`}
                      >
                        <Row className="order-item-row mb-3">
                          <Col xs={12}>
                            <div className="d-flex justify-content-between toporderinfo width80">
                              <div>
                                order placed : <span>23 oct 2080</span>
                              </div>
                              <div>
                                Order ID : <span>#12sksk</span>
                              </div>
                            </div>
                          </Col>
                          <hr />
                          <Col xs={3} lg={2}>
                            <Image
                              src={
                                orderdata.OrderData.orders[0].product
                                  .searchImage
                              }
                              className="w-100"
                            />
                          </Col>
                          <Col xs={8} lg={8}>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="order-product-name">
                                  {"product name"}
                                </div>
                                <div className="order-product-price">
                                  price: <span>1234</span>
                                </div>

                                <div className="order-product-price">
                                  Size: <span>L</span>
                                </div>
                                <div className="order-product-price">
                                  Payment Method : <span>Cash</span>
                                </div>

                                <div className="expected-delivery">
                                  Expected delivery: 23 oct 2080
                                </div>
                              </div>
                              <div>
                                <i className="fa-solid fa-chevron-right"></i>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Link>
                    ) : (
                      <div>orderes placed not yet</div>
                    )}
                  </div>
                  <br />
                  <div className="see-address">
                    <h5 className="your-address-heading">
                      Your Address ({"lenght"})
                    </h5>
                    <div
                      className="view-address"
                      onClick={() => navigate("/account/address")}
                    >
                      view all
                    </div>
                  </div>
                  <div className="your-address">
                    {orderdata?.data?.user?.address?.length >= 1 && (
                      <>
                        <div className="overview-address-name mb-1">
                          {orderdata.data.user.address[0]?.name}
                        </div>
                        <div className="overview-address-info mb-1">
                          {orderdata.data.user.address[0]?.address}
                        </div>
                        <div className="overview-address-phone mb-1">
                          Mobile No :
                          <span>{orderdata.data.user.address[0]?.phone}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="address" className="tab-address">
                <h5 className="your-addresses-heading">Your Addresses</h5>

                {<AddressList />}
              </Tab.Pane>
              <Tab.Pane eventKey="orders" className="tab-orders">
                {<OrderList orderdata={orderdata} />}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
export default AccountPage;
