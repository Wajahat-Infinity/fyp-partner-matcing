import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import Tour from "./Pages/Tour";
import TourDetails from "./Pages/TourDetails";
import TourBooking from "./Pages/TourBooking";
import Flights from "./Pages/Flights";
import Hotels from "./Pages/Hotels";
import HotelBooking from "./Pages/HotelDetails";
import Apartments from "./Pages/Apartments";
import ApartmentDetails from "./Pages/ApartmentDetails";
import Bus from "./Pages/Bus";
import BusDetails from "./Pages/BusDetails";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ForgetPassword from "./Pages/ForgetPassword";
import VerifyOTP from "./Pages/VerifyOTP";
import VerifyPassword from "./Pages/VerifyPassword";
import TopDestinations from "./Pages/TopDestinations";
import Main from "./Pages/Dashboard/Main";
import News from "./Pages/News";
import NewsDetails from "./Pages/NewsDetails";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home title="Home"/></Base>} />
          <Route path='/tour' element={<Base><Tour title="Tours"/></Base>} />
          <Route path='/tour-detail' element={<Base><TourDetails title="Tour Details"/></Base>} />
          <Route path='/tour-booking' element={<Base><TourBooking title="Tour Booking"/></Base>} />
          <Route path='/top-destination' element={<Base><TopDestinations title="Top Destinations"/></Base>} />
          <Route path='/flight' element={<Base><Flights title="Flights"/></Base>} />
          <Route path='/flight-booking' element={<Base><TourBooking title="Flight Booking"/></Base>} />
          <Route path='/hotel' element={<Base><Hotels title="Hotels"/></Base>} />
          <Route path='/hotel-details' element={<Base><HotelBooking title="Hotel Details"/></Base>} />
          <Route path='/room-details' element={<Base><TourBooking title="Room Details"/></Base>} />
          <Route path='/room-booking' element={<Base><TourBooking title="Room Booking"/></Base>} />
          <Route path='/apartment' element={<Base><Apartments title="Apartments"/></Base>} />
          <Route path='/apartment-details' element={<Base><ApartmentDetails title="Apartment Details"/></Base>} />
          <Route path='/bus' element={<Base><Bus title="Bus Services"/></Base>} />
          <Route path='/bus-details' element={<Base><BusDetails title="Bus Details"/></Base>} />
          <Route path='/about' element={<Base><About title="About Us"/></Base>} />
          <Route path='/login' element={<Base><Login title="Login"/></Base>} />
          <Route path='/register' element={<Base><Registration title="Register"/></Base>} />
          <Route path='/forget-password' element={<Base><ForgetPassword title="Forget Password"/></Base>} />
          <Route path='/verifyOTP' element={<Base><VerifyOTP title="Verify OTP"/></Base>} />
          <Route path='/verifyPassword' element={<Base><VerifyPassword title="Verify Password"/></Base>} />
          <Route path='/news' element={<Base><News title="News"/></Base>} />
          <Route path='/news-details' element={<Base><NewsDetails title="News Details"/></Base>} />
          <Route path='/contact' element={<Base><ContactUs title="Contact Us"/></Base>} />

          {/* =========================Dashboard Routes============================== */}
          <Route path='/main-dashboard' element={<Base><Main title="Dashboard"/></Base>} />

          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
