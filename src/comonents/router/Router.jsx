
import { createBrowserRouter } from "react-router-dom";
import { Rot } from "../../rotpage/Rot";
import { Homepeags } from "../../pages/Homepeags";
import { Login } from "../../pages/Login";
import { Topolidy } from "../../pages/Topolidy";
import { Contactus } from "../../pages/Contactus";
import { Blog } from "../../pages/Blog";
import { Lgin2 } from "../auth/Lgin2";
import BookingConfirmation from "../../pages/BookingConfirmation";
import { HotelBooking } from "../../pages/HotelBooking";
import { Reagister } from "../auth/Reagister";
import CountrySearch from "../CountrySearch";
import CountryDetail from "../CountryDetail";




const countries = [
  { id: 1,
     name: "Bangladesh",
        Images:[
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaW4BkIM5Gtg5HjZP2U9zrfnh2g1EBkc5rQ&s" ,
    ],
      flag: "https://flagcdn.com/w320/bd.png",
       hidden: false, },
  { id: 2, name: "India", flag: "https://flagcdn.com/w320/in.png", hidden: false },
  { id: 3, name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png", hidden: true },
  { id: 4, name: "Nepal", flag: "https://flagcdn.com/w320/np.png", hidden: true },
  { id: 5, name: "Japan", flag: "https://flagcdn.com/w320/jp.png", hidden: true },
];









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
      { path: "holiday/:id", element: <HotelBooking /> },
      { path: "/", element: <CountrySearch countries={countries} /> },
      { path: "/country/:id", element: <CountryDetail countries={countries}/> },
      { path: "reagister", element: <Reagister/> },
      
    
    ]
  },
]);

export default router;
