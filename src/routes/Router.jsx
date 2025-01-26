import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import {Navbar} from "../layout/Navbar";
import {Footer} from "../layout/Footer";
import {Main} from "../layout/Main";
import {HomePage} from "../pages/HomePage";
import {ApartmentPage} from '../pages/ApartmentPage';
import {About} from '../pages/About'; 
import {ErrorPage404} from "../pages/ErrorPage404";

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
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/apartment/:id",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <About/>
      },
    ],
  },
]);

export {router};