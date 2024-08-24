import { Link } from "react-router-dom";
import "./CardMeal.css";
import { useEffect, useState } from "react";

const CardMeal = ({ id, name, picture, price, description, classNameString }) => {
  const [smallWidth, setSmallWidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 300) {
      setSmallWidth(true);
    } else {
      setSmallWidth(false);
    }
  }, []);

  window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 300) {
      setSmallWidth(true);
    } else {
      setSmallWidth(false);
    }
  });
  return (
    <article className={`card-meal ${classNameString}`} key={id}>
      <img className="card-meal-img" src={picture} alt={name} />
      <div className="card-meal-text-container">
        <div className="card-meal-title-price">
          <h3>{name}</h3>
          {!smallWidth && <span className="card-meal-price">{price}$</span>}
        </div>
        <p style={{ marginBottom: "30px" }} className="card-mealdescription">
          {description}
        </p>
        <Link className="card-meal-order-button" to="/booking">
          <span
            style={{ marginRight: "5px", fontSize: "15px", color: "black" }}>
            Book a table
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 19.1991V20.3993C24 22.3797 24 24 20.4 24H3.6C0 24 0 22.3797 0 20.3993V19.1991C0 18.5389 0.54 17.9988 1.2 17.9988H22.8C23.46 17.9988 24 18.5389 24 19.1991Z" fill="#333333" />
            <path d="M14.9266 3.81178C14.9866 3.57174 15.0226 3.34369 15.0346 3.09164C15.0706 1.69937 14.2186 0.475131 12.8746 0.115061C10.8586 -0.437047 9.0346 1.07525 9.0346 2.99562C9.0346 3.28368 9.0706 3.54773 9.1426 3.81178C4.8106 4.73596 1.5586 8.58872 1.5586 13.1977V14.998C1.5586 15.6581 2.0986 16.1982 2.7586 16.1982H21.2986C21.9586 16.1982 22.4986 15.6581 22.4986 14.998V13.1977C22.4986 8.58872 19.2586 4.74797 14.9266 3.81178ZM15.6346 11.6974H8.4346C7.9426 11.6974 7.53459 11.2893 7.53459 10.7972C7.53459 10.3051 7.9426 9.89701 8.4346 9.89701H15.6346C16.1266 9.89701 16.5346 10.3051 16.5346 10.7972C16.5346 11.2893 16.1266 11.6974 15.6346 11.6974Z" fill="#333333" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default CardMeal;
