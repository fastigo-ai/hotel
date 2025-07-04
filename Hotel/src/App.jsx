import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/ui/Home";
import AppLayout from "./components/layout/AppLayout";
import Error from "./components/ui/Error";
import CardDetails from "./pages/cards/CardDetails";
import Confirm from "./pages/payment/Confirm";
import PrivacyPolicy from "./pages/terms and setting/Privacy";
import RefundPolicy from "./pages/terms and setting/RefundPolicy";
import TermsAndConditions from "./pages/terms and setting/Termscondition";
import Card from "./pages/cards/Card";
import HotelCard from "./pages/searching/HotelCard ";

import OtpForm from "./pages/Login/OtpForm";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carddetails/:id",
        element: <CardDetails />,
      },
      {
        path: "/card",
        element: <Card />,
      },

      {
        path: "/confirm",
        element: <Confirm />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/hotel-card",
        element: <HotelCard />,
      },
      {
        path: "/signin",
        element: <OtpForm />,
      },
      
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
