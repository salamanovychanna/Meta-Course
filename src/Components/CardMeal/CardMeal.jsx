import { Link } from "react-router-dom";
import "./CardMeal.css";
import { useEffect, useState } from "react";

const CardMeal = ({ id, name, picture, price, description }) => {
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
    <article className="card-meal" key={id}>
      <img className="card-meal-img" src={picture} alt={name} />
      <div className="card-meal-text-container">
        <div className="card-meal-title-price">
          <h3>{name}</h3>
          {!smallWidth && <span className="card-meal-price">{price}$</span>}
        </div>
        <p style={{ marginBottom: "30px" }} className="card-mealdescription">
          {description}
        </p>
        <Link className="card-meal-order-button" to="/order">
          <span
            style={{ marginRight: "5px", fontSize: "15px", color: "black" }}>
            Order a delivery
          </span>
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.717657 2.06063C0.330938 2.06063 0 1.72969 0 1.32469C0 0.938441 0.330938 0.607503 0.717657 0.607503H1.71094C1.72922 0.607503 1.76625 0.607503 1.78453 0.607503C2.44688 0.625784 3.03563 0.754691 3.53251 1.06688C4.49532 1.67719 4.66641 2.5486 4.91251 3.53251H12.8883C12.7931 3.96657 12.743 4.41704 12.743 4.8797L12.7435 4.96782H5.31704L6.95485 11.1314H18.5644L18.5672 11.1211C18.7097 11.131 18.8536 11.1361 18.9989 11.1361C19.3608 11.1361 19.7157 11.1052 20.0607 11.0461L19.8155 12.0333C19.7419 12.3642 19.4475 12.585 19.1166 12.585H7.3411C7.59845 13.5417 7.85626 14.0569 8.20595 14.2964C8.62876 14.5721 9.36517 14.5903 10.5975 14.5721H18.9324C19.3374 14.5721 19.65 14.9035 19.65 15.2897C19.65 15.6947 19.3186 16.0074 18.9324 16.0074H10.6163C9.08908 16.0257 8.15064 15.9886 7.39595 15.4922C6.62345 14.9771 6.21892 14.0939 5.81391 12.4931L3.34829 3.16454C3.34829 3.14626 3.34829 3.14626 3.33001 3.12798C3.21985 2.72298 3.03563 2.44735 2.77829 2.30016C2.52047 2.13422 2.17078 2.06063 1.76625 2.06063C1.7475 2.06063 1.72922 2.06063 1.71094 2.06063H0.717657ZM11.4502 6.60329C11.4502 6.37642 11.6742 6.19267 11.9503 6.19267C12.2269 6.19267 12.451 6.37642 12.451 6.60329V9.3783C12.451 9.60517 12.2269 9.78892 11.9503 9.78892C11.6742 9.78892 11.4502 9.60517 11.4502 9.3783V6.60329ZM8.45298 6.60329C8.45298 6.37642 8.67704 6.19267 8.95314 6.19267C9.2297 6.19267 9.45376 6.37642 9.45376 6.60329V9.3783C9.45376 9.60517 9.2297 9.78892 8.95314 9.78892C8.67704 9.78892 8.45298 9.60517 8.45298 9.3783V6.60329ZM16.7799 16.8535C17.7549 16.8535 18.5461 17.6447 18.5461 18.6202C18.5461 19.5952 17.7549 20.3864 16.7799 20.3864C15.8049 20.3864 15.0136 19.5952 15.0136 18.6202C15.0136 17.6447 15.8049 16.8535 16.7799 16.8535ZM9.03376 16.8535C10.0088 16.8535 10.8 17.6447 10.8 18.6202C10.8 19.5952 10.0088 20.3864 9.03376 20.3864C8.05876 20.3864 7.26751 19.5952 7.26751 18.6202C7.26751 17.6447 8.05876 16.8535 9.03376 16.8535Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.5352 1.46485C21.6301 0.560157 20.3799 0 18.999 0C17.6185 0 16.3679 0.560157 15.4627 1.46485C14.558 2.37 13.9979 3.62016 13.9979 5.0011C13.9979 6.38157 14.558 7.6322 15.4627 8.53689C16.3679 9.44205 17.6185 10.0022 18.999 10.0022C20.3799 10.0022 21.6301 9.44205 22.5352 8.53689C23.4404 7.6322 24.0001 6.38157 24.0001 5.0011C24.0001 3.62016 23.4404 2.37 22.5352 1.46485ZM18.3875 4.95656L17.4551 4.07578C17.3243 3.95109 17.2221 3.93938 17.0937 4.07438L16.2457 4.95422C16.1351 5.06297 16.1243 5.1736 16.2251 5.28235L17.9267 6.97454C18.1652 7.2112 18.2659 7.32423 18.364 7.32193C18.4648 7.31957 18.5627 7.19529 18.8046 6.95813L21.6678 4.14422C21.8942 3.92344 21.9064 3.78422 21.6664 3.54703L20.9356 2.79844C20.7251 2.58135 20.6114 2.69785 20.4479 2.86539C20.4367 2.87692 20.4252 2.8887 20.4134 2.90062L18.3875 4.95656Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default CardMeal;
