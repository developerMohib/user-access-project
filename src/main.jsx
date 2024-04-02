import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Register from "./Pages/Register.jsx";
import Provider from "./utilitis/Provider.jsx";
import Order from "./Pages/Order.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/login",
        element: <LogIn> </LogIn>,
      },
      {
        path: "/register",
        element: <Register> </Register>,
      },
      {
        path: "/order",
        element: <Order> </Order>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
