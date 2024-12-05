import React from "react";
import { Navbar } from "../layout/Navbar";
import { Main } from "../layout/Main";
import { NavLink } from "react-router-dom";
import "../sass/pages/ErrorPage404.scss";
import { Footer } from "../layout/Footer";

function ErrorPage404() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <NavLink to="/">
            <div>Retourner à la page d'accueil</div>
          </NavLink>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export { ErrorPage404 };
