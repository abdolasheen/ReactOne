// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Hero from "./Hero/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Web from "./Web/Web";
import Moblie from "./Moblie/Moblie";
import Movies from "./Movies/Movies";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        children: [
          {
            path: "web",
            element: <Web />,
          },
          {
            path: "mobile",
            element: <Moblie />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      {/* <React.StrictMode> */}
      <RouterProvider router={router} />
      {/* </React.StrictMode> */}
    </>
  );
}

export default App;
