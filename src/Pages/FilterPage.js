import React, { useCallback, useEffect, useState } from "react";
import "../Style/FilterPage/LeftSide.css";
import "../Style/FilterPage/RightSide.css";
import "../Style/FilterPage/filter.css";
import { Container, Row } from "react-bootstrap";
import LeftSide from "../Components/FilterComponent/LeftSide";
import { useDispatch, useSelector } from "react-redux";
import {
  SetMessage,
  SetProductList,
  SetStatus,
} from "../store/Logic/FilterPageSlice";
import RightSide from "../Components/FilterComponent/RightSide";
import { instance } from "../Services/Axiosservices";
import { Setloader } from "../store/Logic/FilterPageSlice";
import { SetFilterItems } from "../store/Logic/FilterPageSlice";
import { useLocation } from "react-router-dom";
import AlertNotification from "../Components/Notifications/AlertNotification";

function FilterPage() {
  const [show, setShow] = useState(false);
  const loaction = useLocation();
  const data = useSelector((state) => {
    return state.FilterProduct;
  });
  const dispatch = useDispatch();
  const handelFilterItemsShow = () => {
    setShow(!show);
  };

  const FetchData = (params) => {
    dispatch(Setloader(true));
    instance
      .get(
        `/getproduct${loaction.pathname}${loaction.search && loaction.search}`,
        { signal: params }
      )
      .then((response) => {
        dispatch(SetProductList(response.data.products));
        dispatch(SetFilterItems(response.data.filterdata));
        dispatch(SetStatus(true));
        dispatch(SetMessage("success"));
        dispatch(Setloader(false));
      })
      .catch((error) => {
        if (error.message !== "canceled") dispatch(SetStatus(false));
        dispatch(SetMessage("something went wrong"));
      });
  };

  const Fetch = useCallback(FetchData, [
    loaction.search,
    loaction.pathname,
    dispatch,
  ]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    Fetch(signal);
    return () => {
      controller.abort();
    };
  }, [Fetch]);

  //   const controller = new AbortController();
  //   const signal = controller.signal;
  return (
    <Container fluid className="FilterComponentContainer">
      {data.status === false && (
        <AlertNotification title={data.message}></AlertNotification>
      )}
      <Row className="FilterComponentRow">
        <LeftSide
          handelFilterItemsShow={handelFilterItemsShow}
          show={show}
        ></LeftSide>
        <RightSide
          handelFilterItemsShow={handelFilterItemsShow}
          show={show}
        ></RightSide>
      </Row>
    </Container>
  );
}

export default FilterPage;
