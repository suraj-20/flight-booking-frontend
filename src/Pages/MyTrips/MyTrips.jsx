import React from "react";
import "./MyTrips.css";
import Header from "../../Components/HomeComponents/Header/Header";
import Trips from "../../Components/MyTripComponents/Trips/Trips";

const MyTrips = () => {
  return (
    <div className="MyTrip-page">
      <section className="header-section">
        <Header />
      </section>
      <section className="mytrips-section">
        <Trips />
      </section>
    </div>
  );
};

export default MyTrips;
