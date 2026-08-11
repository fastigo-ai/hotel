import React, { Suspense } from "react";
import Navbar from "../ui/Navbar"; // or ExpediaHeader if that’s your main nav
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../ui/Footer";
import ScrollToTop from "../ui/ScrollToTop";

const PageSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse space-y-8 min-h-[70vh]">
    {/* Page Title skeleton */}
    <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>

    {/* Hero Banner skeleton */}
    <div className="h-60 bg-gray-200 rounded-xl w-full mb-8"></div>

    {/* Grid Content skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="h-5 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="space-y-4">
        <div className="h-40 bg-gray-200 rounded-xl w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  </div>
);

const AppLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main className={!isHome ? "pt-24 lg:pt-28" : ""}>
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
