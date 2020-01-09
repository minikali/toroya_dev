import React from "react";
import Header from "./components/Header/Header";
import WelcomeBlock from "./components/WelcomeBlock/WelcomeBlock";
import LaCarte from "./components/LaCarte/LaCarte";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./assets/fonts/font.css";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeBlock />
      <LaCarte />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
