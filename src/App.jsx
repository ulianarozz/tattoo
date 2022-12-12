import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
