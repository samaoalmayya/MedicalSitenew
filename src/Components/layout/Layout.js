import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Layout;
