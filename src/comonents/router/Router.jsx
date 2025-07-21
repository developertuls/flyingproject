



import { Rot } from "../../rotpage/Rot";
import { Home } from "../../pages/Home";
import { createBrowserRouter } from "react-router-dom";









const router=createBrowserRouter([
{
    path:'/',
    Component:Rot,
    children:[
{index:true,
    Component:Home

},



    ]
}







]);


export default router;
