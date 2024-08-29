
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './SASS/index.scss';

import App from './App'
import About from './pages/About'
import Services from './pages/Services';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/About", element: <About/> },
  { path: "/Services", element: <Services/> },
  { path: "/Skills", element: <Skills/> },
  { path: "/Experiences", element: <Experiences/> },
  { path: "/Portfolio", element: <Portfolio/> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)