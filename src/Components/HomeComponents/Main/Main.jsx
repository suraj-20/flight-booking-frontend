import React from "react";
import "./Main.css";

import Search from "../SearchBox/Search";

const Main = () => {
  return (
    <section className="homeSection">
      <div className="overlay"></div>

      {/* <video src={video} muted loop autoPlay typeof="video/mp4"></video> */}

      <div className="homeContent container">
        <div className="textDiv">
          <h2 data-aos="fade-up" className="homeTitle ">
            FIND CHEAP FLIGHTS AND SAVE
          </h2>

          <span data-aos="fade-up" className="smallText">
            Search and Compare our best deals with over 440+ airlines - Book
            now!
          </span>
        </div>

        <div className="search-box-container">
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Main;
