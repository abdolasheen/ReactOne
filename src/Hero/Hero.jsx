import React from "react";
import "./Hero.css";
import avatar from "../imgs/avataaars.svg";
import starIcon from "../imgs/star.svg";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

export default function Hero() {
  return (
    <>
      <header
        className=" mainColor w-100 d-flex justify-content-center align-items-center "
        id="hero"
      >
        <div className="hero-txt w-75 text-center">
          <img src={avatar} alt="" className=" w-25 mb-3   " />
          <h1>Start React</h1>
          <div className="customerDivider my-4">
            <div className="leftLine"></div>
            <div className="starIcon">
              <img src={starIcon} alt="starIcon" />
            </div>
            <div className="rightLine"></div>
          </div>
          <p className=" ">Graphic Artist - Web Designer - Illustrator</p>
          {/* <img src={cake} alt="" className=" w-100 " /> */}
        </div>
      </header>
    </>
  );
}
