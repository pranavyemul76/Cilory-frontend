import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "../../Style/FilterPage/Checkout/cart.css";

function Cart() {
  return (
    <>
      <Row className="cartinfo">
        <Col lg={2} xs={3} className="cartimage">
          <Image
            src={
              "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16407468/2021/12/28/fce7ca1e-01ec-4c12-a90f-c7b75abda0e01640669480687-Difference-of-Opinion-Men-Tshirts-4021640669480120-1.jpg"
            }
            className="w-100"
          />
        </Col>
        <Col className="cartshortinfo">
          <div>
            <div className="carttitleprice">
              <div className="cartproducttitle">brand</div>
              <div className="cartproductprice">
                <span> {`₹ Price`}</span>
              </div>
            </div>
            <div className="cartsizeColor">
              <div className="cartsize">
                <span>Size</span>
                Size
              </div>
              <div className="cartcolor">
                <span>Color</span>
                COlor
              </div>
            </div>
            <div className="cartqty">
              <div>qty:</div>
              <select
              // onChange={(e) =>
              //   setselectqty({
              //     productid: item.product._id,
              //     quantity: e.target.value,
              //     size: item.size,
              //   })
              // }
              // disabled={onreq?.update}
              // value={item.quantity}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
          </div>
          <Row className="cartwhishdelete">
            <Col className="text-center">
              <button>WhishList</button>
            </Col>
            <Col className="text-center">
              <button
              // disabled={onreq?.update}
              // onClick={() => {
              //   deletecart(item.product._id, item.size);
              // }}
              >
                {false ? (
                  <div
                    class="spinner-grow text-light spinner-grow-sm"
                    role="status"
                  ></div>
                ) : (
                  "Delete"
                )}
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
