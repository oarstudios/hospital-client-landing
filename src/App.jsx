import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Home/Navbar/Navbar";
import HeroCarousel from "./components/Home/HeroCarousel/HeroCarousel";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseICTCImage from "./components/Home/WhyChooseICTC/WhyChooseICTC";
import CancersWeTreat from "./components/Home/CancersWeTreat/CancersWeTreat";
import MeetOurExperts from "./components/Home/MeetOurExperts/MeetOurExperts";
import ServicesatICTC from "./components/Home/ServicesatICTC/ServicesatICTC";
import BookAppointment from "./components/Home/BookAppointment/BookAppointment";
import RequestCallback from "./components/Home/RequestCallback/RequestCallback";
import OurNetworkOfCare from "./components/Home/OurNetworkOfCare/OurNetworkOfCare";
import ScrollToTop from "./components/Common/ScrollToTop";
import Footer from "./components/Home/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="app-layout">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <AboutUs />
                <WhyChooseICTCImage />
                <CancersWeTreat />
                <ServicesatICTC />
                <MeetOurExperts />
                <BookAppointment />
                <OurNetworkOfCare />
                <RequestCallback />
                <Footer />
              </>
            }
          />

          {/* ✅ NEW PAGE */}
          <Route
            path="/knowMore"
            element={
              <>
                <BookAppointment />
                <Footer />
              </>
            }
          />

        </Routes>
      </main>
    </>
  );
}

export default App;