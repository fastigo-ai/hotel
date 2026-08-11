import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Error from "./components/ui/Error";

const Home = lazy(() => import("./components/ui/Home"));
const CardDetails = lazy(() => import("./pages/cards/CardDetails"));
const Confirm = lazy(() => import("./pages/payment/Confirm"));
const PrivacyPolicy = lazy(() => import("./pages/terms and setting/Privacy"));
const RefundPolicy = lazy(() => import("./pages/terms and setting/RefundPolicy"));
const TermsAndConditions = lazy(() => import("./pages/terms and setting/Termscondition"));
const Card = lazy(() => import("./pages/cards/Card"));
const HotelCard = lazy(() => import("./pages/searching/HotelCard "));
const About = lazy(() => import("./pages/footerDetails/About"));
const Careers = lazy(() => import("./pages/footerDetails/Careers"));
const Partner = lazy(() => import("./pages/footerDetails/Partner"));
const News = lazy(() => import("./pages/footerDetails/News"));
const Advertise = lazy(() => import("./pages/footerDetails/Advertise"));
const Affiliate = lazy(() => import("./pages/footerDetails/Affiliate"));
const TravelGuide = lazy(() => import("./pages/footerDetails/TravelGuide"));
const MotelsInCanada = lazy(() => import("./pages/footerDetails/MotelsInCanada"));
const VacationRentals = lazy(() => import("./pages/footerDetails/VacationRentals"));
const ComparisonTable = lazy(() => import("./pages/footerDetails/ComparisonTable"));
const AccommodationGuide = lazy(() => import("./pages/footerDetails/Accommodation "));
const CarRentalGuide = lazy(() => import("./pages/footerDetails/CarRentalGuide"));
const DomesticFlightsGuide = lazy(() => import("./pages/footerDetails/DomesticFlightsGuide"));
const ComingSoon = lazy(() => import("./components/ui/ComingSoon"));
const Cookies = lazy(() => import("./pages/footerDetails/Cookies"));
const Accessibility = lazy(() => import("./pages/footerDetails/Accessibility"));
const Contact = lazy(() => import("./pages/footerDetails/Contact"));
const FeedBack = lazy(() => import("./pages/footerDetails/FeedBack"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const BookingDetails = lazy(() => import("./pages/profilePage/BookingDetails"));
const PaymentSuccess = lazy(() => import("./pages/payment/PaymentSuccess"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));



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
        path: "/Payment-Success",
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
