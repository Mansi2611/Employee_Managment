import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ToastContainer/> */}
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
