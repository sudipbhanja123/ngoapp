import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Donate from "./components/Donate";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
// import ThankYou from "./components/ThankYou";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/thankyou" element={<ThankYou />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
