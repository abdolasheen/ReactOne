import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  position-fixed top-0 end-0 start-0 ">
        <div className="container">
          <Link className="navbar-brand" to="">
            Start React
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="portfolio"
              >
                Portfolio
              </Link>
              <Link className="nav-link" to="about">
                About
              </Link>
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
