import React, { useState } from "react";
import "./Header.css";
import img1 from "../../../Assets/Images/logo.svg";
import { BiSolidPhoneCall } from "react-icons/bi";
import SignupPopup from "../Popup/SignUpPopup/SignupPopup";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);

    if(!showPopup) {
      document.body.style.background = "rgba(0, 0, 0, 0.5)"
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.background = "initial"
      document.body.style.overflow = "auto"
    }
  };
  return (
    <div className="header">
      <div className="header-container mt-3">
        <div className="nav-logo">
          <img src={img1} alt="logo" />
        </div>
        <div className="">
          <button
            onClick={handleTogglePopup}
            type="submit"
            className="home-callbtn"
          >
            SignUp/Login
          </button>
          <button type="submit" className="onlyCallBtn">
            <BiSolidPhoneCall className="icon" />
          </button>
        </div>
      </div>
      {showPopup && <SignupPopup onClose={handleTogglePopup} />}
    </div>
  );
};

export default Header;
