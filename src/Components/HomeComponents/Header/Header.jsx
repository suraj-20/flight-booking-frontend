import React, { useState } from "react";
import "./Header.css";
import img1 from "../../../Assets/Images/wowfare-blue.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
// import { MdTravelExplore } from "react-icons/md";
// import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import SignupPopup from "../../SearchedFlightComponents/Popup/SignUpPopup/SignupPopup";

const Header = () => {
  const [active, setActive] = useState("navBar");
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);

    if (!showPopup) {
      // document.body.style.background = "rgba(0, 0, 0, 0.5)";
      document.body.style.overflow = "hidden";
    } else {
      // document.body.style.background = "initial";
      document.body.style.overflow = "auto";
    }
  };

  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="home-header flex">
        <div className="logoDiv">
          <Link to={"/"} href="#" className="logo flex">
            <div className="nav-logo">
              <img src={img1} alt="logo" />
            </div>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to={"/myTrip"} href="#" className="navLink">
                My Trips
              </Link>
            </li>

            <li className="navItem">
              <Link to={""} href="#" className="navLink">
                Contact
              </Link>
            </li>

            <button
              onClick={handleTogglePopup}
              type="submit"
              className="home-callbtn"
            >
              SignUp/Login
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="navbarIcon" />
          </div>
        </div>

        <div onClick={showNavbar} className="toggleNavbar">
          <PiDotsNineBold className="navbarIcon" />
        </div>
      </header>
      {showPopup && <SignupPopup onClose={handleTogglePopup} />}
    </section>
  );
};

export default Header;
