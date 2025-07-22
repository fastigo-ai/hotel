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
import About from "./pages/footerDetails/About";
import Careers from "./pages/footerDetails/Careers";
import Partner from "./pages/footerDetails/Partner";
import News from "./pages/footerDetails/News";
import Advertise from "./pages/footerDetails/Advertise";
import Affiliate from "./pages/footerDetails/Affiliate";
import TravelGuide from "./pages/footerDetails/TravelGuide";
import MotelsInCanada from "./pages/footerDetails/MotelsInCanada";
import VacationRentals from "./pages/footerDetails/VacationRentals";
import ComparisonTable from "./pages/footerDetails/ComparisonTable";
import AccommodationGuide from "./pages/footerDetails/Accommodation ";
import CarRentalGuide from "./pages/footerDetails/CarRentalGuide";
import DomesticFlightsGuide from "./pages/footerDetails/DomesticFlightsGuide";
import ComingSoon from "./components/ui/ComingSoon";
import Cookies from "./pages/footerDetails/Cookies";
import Accessibility from "./pages/footerDetails/Accessibility"
import Contact from "./pages/footerDetails/Contact";
import FeedBack from "./pages/footerDetails/FeedBack";
import Gallery from "./pages/gallery/Gallery";
import BookingDetails from "./pages/profilePage/BookingDetails";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import LoginPage from "./pages/Login/LoginPage";



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
        path: "/get-app",
        element: <ComingSoon />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/carddetails/:id",
        element: <CardDetails />,
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
        element: <LoginPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Careers",
        element: <Careers />,

      },
      {
        path: "/Partner",
        element: <Partner />,

      },
      {
        path: "/news",
        element: <News />,

      },
      {
        path: "/advertise",
        element: <Advertise />,

      },
      {
        path: "/affiliate",
        element: <Affiliate />,

      },
      {
        path: "/travelGuide",
        element: <TravelGuide />,

      },
      {
        path: "/MotelsInCanada",
        element: <MotelsInCanada />,

      },
      {
        path: "/vacationRentals",
        element: <VacationRentals />,

      },
      {
        path: "/comparisonTable",
        element: <ComparisonTable />,

      },
      {
        path: "/accommodationGuide",
        element: <AccommodationGuide />,

      },
      {
        path: "/car-rentalGuide",
        element: <CarRentalGuide />,

      },
      {
        path: "/domestic-Flights-Guide",
        element: <DomesticFlightsGuide />,

      },
      {
        path: "/cookies",
        element: <Cookies />,

      },
      {
        path: "/accessibility",
        element: <Accessibility />,

      },
      {
        path: "/contact",
        element: <Contact />,

      },
      {
        path: "/feedback",
        element: <FeedBack />,

      },
      {
        path: "/gallery",
        element: <Gallery />,

      },
      {
        path: "/booking-history",
        element: <BookingDetails />,

      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,

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
