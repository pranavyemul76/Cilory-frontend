import React from "react";
import "../../Style/FilterPage/Checkout/address.css";
import { Row, Col, Button } from "react-bootstrap";
function Address() {
  return (
    <div>
      <Row className="justify-content-around">
        <Col lg={5} xs={12} key={"1"} className={`bye-address`}>
          <div className="select-address">
            <label className={`select-address-label`}>
              <span className="home-select">{"home"}</span>
              <input
                type={"radio"}
                className={`select-address-input`}
                name="address"
              />

              <span className="address-detail">
                {/* <span className={focusinput}></span> */}
                <p>{"name"}</p>
                <p>
                  {"address"}
                  <br />
                  <br />
                  <span>
                    {"i.city"}
                    <br />
                    {"i.state"}
                  </span>
                </p>
                <p>
                  Mobile <strong>{"i.phone"}</strong>
                </p>
              </span>
            </label>
          </div>
          <div className="addressdeleteedit">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </Col>

        <Col lg={5} xs={12} className="bye-address new-address">
          <div className="d-flex justify-content-center align-items-center h-100">
            <Button className="h-fix">Add new</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Address;
