import React from "react";
import Navbar from "../ui/Navbar"; // or ExpediaHeader if that’s your main nav
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import ScrollToTop from "../ui/ScrollToTop";

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
