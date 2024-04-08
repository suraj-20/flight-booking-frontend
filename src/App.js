import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchedFlight from "./Pages/SearchedFlightPage/SearchedFlight.jsx";
import Footer from "./Components/SearchedFlightComponents/FooterSection/Footer.jsx";
import Home from "./Pages/HomePage/Home.jsx";
import Mytrip from "./Pages/MyTrips/MyTrips.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/searchedFlight" element={<SearchedFlight />}></Route>
        <Route path="/myTrip" element={<Mytrip />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
