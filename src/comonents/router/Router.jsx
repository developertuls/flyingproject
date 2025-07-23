



import { Rot } from "../../rotpage/Rot";
import { Home } from "../../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Homepeags } from "../../pages/Homepeags";
import { Login } from "../../pages/Login";
import { Gellryhome } from "../../pages/Gellryhome";
import { Topolidy } from "../../pages/Topolidy";
import { Booking } from "../../pages/Booking";
import{Contactus}from '../../pages/Contactus'
import{Blog}from '../../pages/Blog'
import { TbLogin2 } from "react-icons/tb";
import { Lgin2 } from "../../pages/Lgin2";









const router=createBrowserRouter([
{
    path:'/',
    Component:Rot,
    children:[
{index:true,
    Component:Homepeags

},

{
    path:'booking',
    Component:Login
},
{
    path:'home',
    Component:Homepeags
},


{
    path:'like',
    Component:Topolidy
},
{
    path:'contact',
    Component:Contactus
},
{
    path:'blogs',
    Component:Blog
},
{
    path:'login',
    Component:Lgin2
}



    ]
}







]);


export default router;
