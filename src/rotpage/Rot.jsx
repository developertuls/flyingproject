
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nebver from "../comonents/shared/Nebver";  // corrected here
import { Foterhome } from "./Foterhome";
import 'react-toastify/dist/ReactToastify.css';
import BookingConfirmation from "../pages/BookingConfirmation";
import FlightSearchForm from "../pages/FlightSearchForm";

export const Rot = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Nebver />

      {/* Main content */}
      <Outlet />


      {/* Footer */}
      <Foterhome/>
   
 
     

      {/* Scroll Restoration */}
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
};
