import React from "react";
import "./SearchedFligh.css";
import MainForm from "../../Components/SearchedFlightComponents/MainFormSection/MainForm";
// import mainImage from "../../Assets/Images/deeplink-bg.jpg";
import Header from "../../Components/SearchedFlightComponents/Header/Header";
import RecentDeals from "../../Components/SearchedFlightComponents/RecentCheapDeals/RecentDeals";
import StepSection from "../../Components/SearchedFlightComponents/StepsSection/StepSection";
// import StarSection from "../../Components/SearchedFlightComponents/StarsSection/StarSection";
import ReviewSection from "../../Components/SearchedFlightComponents/ReviewsSection/ReviewSection";
import Popup from "../../Components/SearchedFlightComponents/Popup/Popup";

const SearchedFlight = () => {
  return (
    <div className="searchedFlight">
      <Popup />
      <div className="searchedFlightContainer">
        {/* <img className="mainImage" src={mainImage} alt="" /> */}
        <Header />
        <MainForm />
      </div>
      <div className="recentCheapDealsSection">
        <RecentDeals />
      </div>
      <div className="stepSection">
        <StepSection />
      </div>
      <div className="reviewAndStarSection">
        <div className="bothSection">
          {/* <StarSection /> */}
          <ReviewSection />
        </div>
      </div>
    </div>
  );
};

export default SearchedFlight;
