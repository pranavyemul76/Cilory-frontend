import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import FilterPage from "../Pages/FilterPage";
import HomePage from "../Pages/HomePage";
import CheckOutPage from "../Pages/CheckOutPage";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/:slug" element={<FilterPage></FilterPage>} />
            <Route path="/checkout/:checkout" element={<CheckOutPage />} />
            <Route path="*" element={<div> Page Not Found</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Routers;
