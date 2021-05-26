import React from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/includes/Navbar";
import "./App.css";
import Body from "./components/includes/Body";
import Card from "./components/includes/Card";
import Footer from "./components/includes/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Home />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
