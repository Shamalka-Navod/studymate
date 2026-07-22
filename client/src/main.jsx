import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(

  <StrictMode>

    <BrowserRouter>

<ThemeProvider>

<App />

<Toaster />

</ThemeProvider>

</BrowserRouter>


  </StrictMode>

);