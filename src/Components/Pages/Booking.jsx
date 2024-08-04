import { useNavigate } from "react-router-dom";
import BookingForm from "../BookingForm";
import "./Booking.css";
import { useEffect, useState } from "react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const Booking = () => {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  const navigateTo = useNavigate();
  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);
    window.addEventListener("resize", resizeW);
    return () => window.removeEventListener("resize", resizeW);
  });
  return (
    <main className="booking-section">
      <div className="booking-content">
        <div className="booking-text-section">
          <h1 style={{ marginBottom: "40px" }}>Booking a table</h1>
          <BookingForm navigateTo={navigateTo} />
        </div>
        {deviceSize > 800 && (
          <ImageWrapper
            classNameString="booking-img"
            srcString="https://munchafrica.ca/wp-content/uploads/2022/09/munch-about.jpg"
            altString="brother cooking"
            heightValue={703}
            widthValue={428}
            hash="LGJtn~4:%L_4KjIA-oNGITsj%g8_"
          />
        )}
      </div>
    </main>
  );
};

export default Booking;
