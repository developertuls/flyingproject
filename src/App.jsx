
import { RouterProvider } from "react-router-dom";
import router from "./comonents/router/Router";
// import ScrollToTop from './comonents/ScrollToTop';
import './index.css'; //
import './App.css';




function App() {
 

  return (
    
    <>
  {/* 👈 এটা এখানে */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
