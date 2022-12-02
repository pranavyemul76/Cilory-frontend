import React from "react";
import Footer from "./Footer";
import { NavigantionBar } from "./Headers/NavigantionBar";
function Layout({ children }) {
  return (
    <>
      <header>
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
