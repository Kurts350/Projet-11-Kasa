import React from "react";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import ApartmentSection from "./components/ApartmentSection.jsx";
import './sass/App.scss'

function App() {
  return (
    <div>
      <Navbar />
        <Banner />
        <ApartmentSection />
      <Footer />
    </div>
  );
}

export default App;
