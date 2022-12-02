import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { GenrateUrl, GetParams } from "../../Utils/Getparams";

function LeftSide({ handelFilterItemsShow, show }) {
  const location = useLocation();
  const [genrateUrl, SetgenrateUrl] = useState({});
  const navigate = useNavigate();
  const FilterListData = useSelector((state) => {
    return state.FilterProduct;
  });

  const { slug } = useParams();

  useEffect(() => {
    SetgenrateUrl(GetParams(location.search));
  }, [location.pathname]);
  const handelCheckBox = (e) => {
    const Url = GenrateUrl(e, genrateUrl);
    SetgenrateUrl(Url);
    const FinaleUrl = Object.entries(Url).reduce((prev, current, index) => {
      if (current[1].length >= 1) {
        return `${prev}${current[0]}=${current[1].join(",")}&`;
      } else {
        return `${prev}`;
      }
    }, "");
    navigate(`/${slug}?${FinaleUrl.substr(0, FinaleUrl.length - 1)}`);
  };

  return (
    <Col className={`FilterLeftSide ${show ? "FilterShows" : "FilterHides"}`}>
      <Row className="Filter-Clear-Row">
        <Col className="FilterTitle">Filters</Col>
        <Col className="ClearAll">CLear All</Col>
      </Row>
      <Row className="FilterClose">
        <Col>
          <i className="fa-solid fa-xmark" onClick={handelFilterItemsShow}></i>
          <span>Filter</span>
        </Col>
      </Row>
      <Row className={`FilterItemsRow`}>
        <ul>
          {FilterListData?.FilterListData[0] &&
            Object.entries(FilterListData.FilterListData[0]).map((item) => {
              return (
                <div>
                  <li className="FilterHeadingTitle">{item[0]}</li>
                  <div className="FilterItemsContainer">
                    {item[1].map((filteritem) => {
                      return (
                        <li className="FilterItem">
                          <label>
                            <input
                              type="checkbox"
                              name={item[0]}
                              value={filteritem._id}
                              onChange={handelCheckBox}
                              checked={
                                genrateUrl[item[0]]
                                  ? genrateUrl[item[0]].includes(filteritem._id)
                                  : false
                              }
                            />
                            <span>{filteritem._id}</span>
                          </label>
                        </li>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          <div>
            <li className="FilterHeadingTitle">Categories</li>
            <div>
              <li className="FilterItem">
                <label>
                  <input
                    type="checkbox"
                    name="category"
                    value="tsht"
                    onChange={handelCheckBox}
                  />
                  <span>Unchecked</span>
                </label>
              </li>
              <li className="FilterItem">
                <label>
                  <input
                    type="checkbox"
                    name="brand"
                    value="tshrt"
                    onChange={handelCheckBox}
                  />
                  <span>Unchecked</span>
                </label>
              </li>
              <li className="FilterItem">
                <label>
                  <input
                    type="checkbox"
                    name="brand"
                    value="tshurt"
                    onChange={handelCheckBox}
                  />
                  <span>Unchecked</span>
                </label>
              </li>
              <li className="FilterItem">
                <label>
                  <input
                    type="checkbox"
                    name="brand"
                    value="tskhrt"
                    onChange={handelCheckBox}
                  />
                  <span>Unchecked</span>
                </label>
              </li>

              <li className="FilterItem">
                <label>
                  <input type="checkbox" />
                  <span>Unchecked</span>
                </label>
              </li>
            </div>
          </div>
        </ul>
      </Row>
    </Col>
  );
}

export default LeftSide;
