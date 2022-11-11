// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}

export default App;
