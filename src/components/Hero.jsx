import React from "react";
import HeroImg from "../img/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={HeroImg} alt="heroImg" />
      <h1>Online experiences</h1>
      <p>
        Join unique interactive activities led by <br />
        one-of-a-kind hosts—all without leaving <br />
         home.
      </p>
    </section>
  );
}
