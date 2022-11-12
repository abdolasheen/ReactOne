import React from "react";
import starIcon from "../imgs/star.svg";
import cabin from "../imgs/cabin.png";
import cake from "../imgs/cake.png";
import safe from "../imgs/safe.png";
import circus from "../imgs/circus.png";
import game from "../imgs/game.png";
import submarine from "../imgs/submarine.png";
import pluse from "../imgs/pluse.svg";
import "./Portfolio.css";
import Card from "./Card";
import { Link, Outlet } from "react-router-dom";

let arr = [];
arr.push(cabin, cake, circus, game, submarine, safe);
export default function Portfolio() {
  return (
    <>
      <section className="portfolio text-center" id="x">
        <h2 className="subHeader text-uppercase">Portfolio</h2>
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
          <div className="row g-5">
            {arr.map((imgSrc, idx) => (
              <Card
                key={idx}
                ImgSrc={imgSrc}
                pluse={pluse}
                starIcon={starIcon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
