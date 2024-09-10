import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const AppLayout = () => {
  return (
    <div>
      Navbar
      {/* "/" 안에 있는 자손 페이지들 */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
