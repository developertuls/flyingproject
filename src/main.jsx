
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './comonents/router/Router';



const root = createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
     <RouterProvider router={router}>
      <App />
     </RouterProvider>
              
      
     </React.StrictMode>
);