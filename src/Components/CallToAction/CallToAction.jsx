import { useEffect, useState } from "react";
import Button from "../Button";
import "./CallToAction.css";

const CallToAction = () => {
  const [mediumWidth, setMediumWidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 650) {
      setMediumWidth(true);
    }
  }, []);

  window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 650) {
      setMediumWidth(true);
    } else {
      setMediumWidth(false);
    }
  });
  return (
    <section className="call-to-action">
      <div className="call-to-action-content">
        <div className="call-to-action-text-section">
          <div className="call-to-action-title">
            <h1>Little Lemon</h1>
            <h5 style={{ marginBottom: "20px" }}>Kyiv</h5>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>

          <Button bgColor="primary" color="black">
            Reserve a table
          </Button>
        </div>
        {!mediumWidth && (
          <img
            className="call-to-action-img"
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cooking sushi process"
          />
        )}
      </div>
    </section>
  );
};

export default CallToAction;
