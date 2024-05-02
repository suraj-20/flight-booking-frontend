import React from "react";
import "./RecentDeals.css";
import { BsCurrencyDollar } from "react-icons/bs";
import flightimage from "../../../Assets/Images/00.png";

const cards = [
  {
    id: 1,
    card_title: "Popular",
    flight_logo: flightimage,
    destication: "NYC - ROM",
    class: "Economy,rt,total",
    flight_price: "950",
  },
  {
    id: 2,
    card_title: "Fastest",
    flight_logo: flightimage,
    destication: "NYC - ROM",
    class: "Economy,rt,total",
    flight_price: "950",
  },
  {
    id: 3,
    card_title: "Best Seller",
    flight_logo: flightimage,
    destication: "NYC - ROM",
    class: "Economy,rt,total",
    flight_price: "950",
  },
  {
    id: 4,
    card_title: "Best Seller",
    flight_logo: flightimage,
    destication: "NYC - ROM",
    class: "Economy,rt,total",
    flight_price: "950",
  },
];

const RecentDeals = () => {
  return (
    <div className="recentDealsSection">
      <div className="heading">
        <h3>Recent Cheap Flight Deals from New York City to Rome</h3>
      </div>
      <div className="flight_filter-flight_details">
        {/* <div className="filter-flights">
          <div className="filter-container">
            <form action="">
              <div className="filter-input-fields fliter-price">
                <h4>Price</h4>
                <div className="checkbox-input-field filter-price">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Low To High"
                  />
                  <label for="vehicle1">Low To High</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="High To Low"
                  />
                  <label for="vehicle2">High To Low</label>
                  <br />
                </div>
              </div>
              <div className="filter-input-fields">
                <h3>Airlines</h3>

                <div className="checkbox-input-field flight-name">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="IndiGo"
                  />
                  <label for="vehicle1">IndiGo</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Air India"
                  />
                  <label for="vehicle2">Air India</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Vistara"
                  />
                  <label for="vehicle3">Vistara</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="SpiceJet Ltd"
                  />
                  <label for="vehicle3">SpiceJet Ltd</label>
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div> */}
        <div className="recemtDeal-container">
          <div className="recentCards">
            {cards.map((card) => (
              <div key={card.id} className="recentCard">
                <div className="card-contents">
                  <div className="card-title">
                    <h5
                      style={
                        card.id === 1
                          ? { color: "orange" }
                          : card.id === 3
                          ? { color: "red" }
                          : { color: "green" }
                      }
                    >
                      {card.card_title}
                    </h5>
                  </div>
                  <div className="fromAndPrice">
                    <div className="flight-logo">
                      <img src={card.flight_logo} alt="" />
                    </div>
                    <div className="flight-from-to">
                      <div className="flight-cityname">
                        <div className="flight-from">
                          <h4>18:10</h4>
                          <h5>DEL</h5>
                        </div>
                        <div className="plane">
                          <i class="fa-solid fa-plane"></i>
                        </div>
                        <div className="flight-to">
                          <h4>19:10</h4>
                          <h5>PAT</h5>
                        </div>
                      </div>
                    </div>
                    <div className="flight-price">
                      <p>
                        {" "}
                        <BsCurrencyDollar />
                        {card.flight_price}
                      </p>
                      <button className="bookBtn">
                        Book <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDeals;
