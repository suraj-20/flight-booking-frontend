import React from "react";
import Header from "../../Components/HomeComponents/Header/Header";
import Main from "../../Components/HomeComponents/Main/Main";
import Card from "../../Components/HomeComponents/Cards/Card";
// import StarSection from "../../Components/StarsSection/StarSection";
import ReviewSection from "../../Components/SearchedFlightComponents/ReviewsSection/ReviewSection";
import Work from "../../Components/HomeComponents/HowItWork/Work";
import SubHeader from "../../Components/HomeComponents/SubHeader/SubHeader";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="main-section">
        <Main />
      </section>
      <section className="subHeader-section">
        <SubHeader />
      </section>
      <section className="card-section">
        <Card />
      </section>
      <section className="reviewAndStarSection">
        <div className="bothSection">
          {/* <StarSection /> */}
          <ReviewSection />
        </div>
      </section>
      <section className="work-section">
        <Work />
      </section>
    </div>
  );
};

export default Home;
