import React from "react";
import Footer from "./Footer";
import { NavigantionBar } from "./Headers/NavigantionBar";
import { useSelector } from "react-redux";
import Notification from "./Notifications/Notification";
function Layout({ children }) {
  const CartData = useSelector((state) => {
    return state.cart;
  });
  return (
    <>
      <header>
        {CartData.SizeNotificationDeskTop.status && (
          <Notification>
            {CartData.SizeNotificationDeskTop.messeage}
          </Notification>
        )}
        <NavigantionBar></NavigantionBar>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
