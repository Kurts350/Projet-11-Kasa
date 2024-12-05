import React from "react";
import "../sass/layout/Main.scss";

function Main({ children }) {
  return <div className="main"> {children} </div>
}

export {Main};