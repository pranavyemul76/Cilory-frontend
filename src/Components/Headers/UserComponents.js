import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/NavBar/usercomponent.css";
import { CheckIsAuthenticated } from "../../store/Logic/User/UserSlice";
import { useCookies } from "react-cookie";
import { instance, PrivateRoute } from "../../Services/Axiosservices";
import { GetCartData } from "../../store/Logic/CartSlice";
import { GetUserInfo } from "../../store/Logic/Account/AccountSlice";

function UserComponents() {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLOgout = () => {
    removeCookie("user", { path: "/" });
    dispatch(CheckIsAuthenticated(false));
    navigate("/");
  };
  const userinfo = useSelector((state) => {
    return state.User;
  });
  useEffect(() => {
    if (cookie.user) {
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${cookie.user}`;
      PrivateRoute.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${cookie.user}`;
      dispatch(CheckIsAuthenticated(true));
      dispatch(GetCartData({ id: undefined, size: undefined, qty: undefined }));
      dispatch(GetUserInfo());
    } else {
      instance.defaults.headers.common["Authorization"] = null;
      PrivateRoute.defaults.headers.common["Authorization"] = null;
      dispatch(CheckIsAuthenticated(false));
    }
  }, [cookie.user]);
  return (
    <div className="Usercomponent-section">
      <ul>
        {userinfo.isAuthenticated ? (
          <Link to={`/overview`}>
            <li>{"User Name"}</li>
          </Link>
        ) : (
          <Link to={"/user/login"}>
            <li>login / signup</li>
          </Link>
        )}
        <Link to={"/account/orders"}>
          <li> orders</li>
        </Link>
        <Link to={"/account/address"}>
          <li>saved address</li>
        </Link>
        <Link to={"/account/orders"}>
          <li>Edit prifile</li>
        </Link>
        {userinfo.isAuthenticated && (
          <li className="logout-btn-li">
            <button className="logout-btn" onClick={handleLOgout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserComponents;
