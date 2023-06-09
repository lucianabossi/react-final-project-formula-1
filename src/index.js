import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import DriversStanding from './pages/DriversStanding';
import Constructors from './pages/Constructors';
import ConstructorsStanding from './pages/ConstructorsStanding';
import Schedule from './pages/Schedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/home", element:<Home />},
      {path: "/drivers", element:<Drivers />},
      {path: "/driversStanding", element:<DriversStanding />},
      {path: "/constructors", element:<Constructors />},
      {path: "/constructorsStanding", element:<ConstructorsStanding />},
      {path: "/schedule", element:<Schedule />}
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
