import "../common/template/dependencies";
import React from "react";
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Routes from "./routes";

export default (props) => (
  <div className="wrapper">
    <Header></Header>
    <SideBar></SideBar>
    <div className="content-wrapper">
      <Routes></Routes>
    </div>
    <Footer></Footer>
  </div>
);
