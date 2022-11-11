import React from "react";
import "./About.css";
import starIcon from "../imgs/star.svg";
export default function About() {
  return (
    <>
      <section className="about" id="about">
        <h2 className="text-center text-uppercase subHeader">About</h2>
        <div className="bordered">
          <div className="customerDivider my-4">
            <div className="leftLine"></div>
            <div className="starIcon">
              <img src={starIcon} alt="starIcon" />
            </div>
            <div className="rightLine"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 ms-auto lead">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-4 me-auto lead">
              <p className=" text-white">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
