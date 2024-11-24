import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import ApartmentSection from "./components/ApartmentSection.jsx";
import './sass/App.scss'

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <ApartmentSection />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
