

import './index.css'
import ReactDOM from "react-dom/client";

import {  RouterProvider } from "react-router-dom";
import { router } from './Router/Router.jsx';
import React from "react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
