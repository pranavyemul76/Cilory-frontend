import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Protectedroute = ({ children }) => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["user"]);
  useEffect(() => {
    if (cookie.user == null || undefined || "") {
      navigate("/user/login");
    }
  }, []);
  if (cookie.user) {
    return children;
  }
};
export default Protectedroute;
