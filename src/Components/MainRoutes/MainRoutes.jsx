import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Booking from "../Pages/Booking";
import Confirmed from "../Pages/Confirmed";
import PageNotFound from "../Pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/confirmed" element={<Confirmed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
