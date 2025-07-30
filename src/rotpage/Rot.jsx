
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nebver from "../comonents/shared/Nebver";  // corrected here
import { Foterhome } from "./Foterhome";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookingConfirmation from "../pages/BookingConfirmation";

export const Rot = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Nebver />

      {/* Main content */}
      <Outlet />

      {/* Footer */}
      <Foterhome/>
     {/* <BookingConfirmation/> */}
    
 

      {/* Scroll Restoration */}
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
};
