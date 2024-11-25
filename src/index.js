import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apartment",
    element: <h1>Nos appartements</h1>,
  },
  {
    path: "/about",
    element: (
      <>
          <Navbar />
          <h1>A propos</h1>
          <Footer />
      </>
)
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
