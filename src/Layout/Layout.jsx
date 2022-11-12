import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import Portfolio from "../Portfolio/Portfolio";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
