
import { createBrowserRouter } from "react-router-dom";
import { Rot } from "../../rotpage/Rot";
import { Homepeags } from "../../pages/Homepeags";
import { Login } from "../../pages/Login";
import { Topolidy } from "../../pages/Topolidy";
import { Contactus } from "../../pages/Contactus";
import { Blog } from "../../pages/Blog";
import { Lgin2 } from "../auth/Lgin2";
import BookingConfirmation from "../../pages/BookingConfirmation";
import { HolidayDetails } from "../../pages/HolidayDetails";
import { Reagister } from "../auth/Reagister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rot />,
    children: [
      { index: true, element: <Homepeags /> },
      { path: "booking", element: <Login /> },
      { path: "home", element: <Homepeags /> },
      { path: "like", element: <Topolidy /> },
      { path: "contact", element: <Contactus /> },
      { path: "blogs", element: <Blog /> },
      { path: "login", element: <Lgin2 /> },
      { path: "booking-confirmation", element: <BookingConfirmation /> },
      { path: "holiday/:id", element: <HolidayDetails /> },
      { path: "reagister", element: <Reagister /> }
    ]
  },
]);

export default router;
