import React, { Suspense } from "react";
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
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
