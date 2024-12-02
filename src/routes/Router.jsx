import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import ApartmentPage from '../pages/ApartmentPage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/apartment",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <h1>A propos</h1>,
      },
    ],
  },
]);

export default router;