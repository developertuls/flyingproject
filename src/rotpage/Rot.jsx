
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nebver from "../comonents/shared/Nebver";
import { Foterhome } from "./Foterhome";






export const Rot = () => {
  return (
    <div className="">
      {/* Navbar */}
   <Nebver/>



   
  <Outlet/>




 <Foterhome/>

     <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
};

