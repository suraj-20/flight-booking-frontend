import React, { useState } from "react";
import "./RightContainer.css";
import { HiLocationMarker, HiOutlineUserGroup } from "react-icons/hi";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const RightContainer = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [showPassengerOption, setShowPassengerOption] = useState(false);

  const handleToggleFlightType = (value) => {
    setIsOneWay(value === "one-way");
  };

  const handleToggleShowPassenger = () => {
    setShowPassengerOption(!showPassengerOption);
  };

  const handlePassengerChange = (type, increment) => {
    switch (type) {
      case "adults":
        setNumAdults(Math.max(numAdults + increment, 0));
        break;
      case "children":
        setNumChildren(Math.max(numChildren + increment, 0));
        break;
      case "infants":
        setNumInfants(Math.max(numInfants + increment, 0));
        break;
      default:
        break;
    }
  };

  const preventDefaultAction = (e) => {
    e.preventDefault();
  };

  return (
    <div className="right-container-content">
      <div className="upper-content mb-3">
        <div className="contectUsContent mt-3">
          <div className="verticalLine">
            <div className="line"></div>
          </div>
          <div className="contentInPera">
            <p>Fill out the form and modify your destication.</p>
          </div>
          <div className="verticalLine">
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="contactUsHeading">
        <h3>Fill out the form and modify your destication.</h3>
      </div>

      <div className="formDiv-container">
        <form className="formDiv" action="">
          <div className="way-of-flight">
            <div className="round-trip">
              <button
                className={!isOneWay ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleFlightType("round-trip");
                }}
              >
                Round trip
              </button>
              <button
                className={isOneWay ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleFlightType("one-way");
                }}
              >
                One way
              </button>
            </div>
          </div>
          <div data-aos="fade-up" className="modify-cardDiv cardDiv grid">
            <div className="modify-column-input">
              <div className="modify-input-field departure-input">
                <HiLocationMarker className="icon" />
                <input type="text" name="" id="" placeholder="Leaving From" />
              </div>
              <div className="modify-input-field destination-input">
                <HiOutlineUserGroup className="icon" />
                <input type="text" name="" id="" placeholder="Going to" />
              </div>
              <div className="modify-input-field departure-date-input">
                <FaCalendarAlt className="icon" />
                <input type="date" name="" id="" placeholder="Departing" />
              </div>

              {isOneWay ? (
                <div className="modify-input-field returning-date-input">
                  <FaCalendarAlt className="icon" />
                  <input type="date" name="" id="" placeholder="Returning" />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="modify-column-search">
              <div
                onClick={handleToggleShowPassenger}
                className="modify-input-field passenger-input"
              >
                <FaUser className="icon" />
                <span style={{padding: "0.8rem"}}>Passenger</span>
              </div>
              <div className="searchBtn modifyBtn">
                <button type="submit">Modify</button>
              </div>
            </div>
          </div>

          <div className="fligh-class-dropdown">
            <select
              className="dropdown-flight-class modify-flight-class"
              aria-label="Default select example"
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>

          {showPassengerOption && (
            <div className="passenger-options modify-passenger-option">
              <div className="passenger-type">
                <label>Adults:</label>
                <div className="addOrSubBtn">
                  <button
                    onClick={(e) => {
                      preventDefaultAction(e);
                      handlePassengerChange("adults", -1);
                    }}
                  >
                    -
                  </button>
                  <span>{numAdults}</span>
                  <button
                    onClick={(e) => {
                      preventDefaultAction(e);
                      handlePassengerChange("adults", 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="passenger-type">
                <label>Children:</label>
                <div className="addOrSubBtn">
                  <button
                    onClick={(e) => {
                      preventDefaultAction(e);
                      handlePassengerChange("children", -1);
                    }}
                  >
                    -
                  </button>
                  <span>{numChildren}</span>
                  <button
                    onClick={(e) => {
                      preventDefaultAction(e);
                      handlePassengerChange("children", 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="passenger-type">
                <label>Infants:</label>
                <div className="addOrSubBtn">
                  <button
                    onClick={(e) => {
                      preventDefaultAction(e);
                      handlePassengerChange("infants", -1);
                    }}
                  >
                    -
                  </button>
                  <span>{numInfants}</span>
                  <button
                    onClick={(e) => {
                      preventDefaultAction(e);
                      handlePassengerChange("infants", 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RightContainer;
