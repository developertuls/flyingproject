



import { Rot } from "../../rotpage/Rot";
import { Home } from "../../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Homepeags } from "../../pages/Homepeags";
import { Login } from "../../pages/Login";
import { Gellryhome } from "../../pages/Gellryhome";
import { Topolidy } from "../../pages/Topolidy";









const router=createBrowserRouter([
{
    path:'/',
    Component:Rot,
    children:[
{index:true,
    Component:Homepeags

},

{
    path:'login',
    Component:Login
},
{
    path:'go',
    Component:Topolidy
}

    ]
}







]);


export default router;
