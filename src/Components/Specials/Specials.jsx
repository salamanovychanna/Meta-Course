import "./Specials.css";

import Button from "../Button";
import CardMealList from "../CardMealList";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Specials = () => {
  const data = useSelector((state) => {
    return state.menu.value;
  });

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
    <section className="specials-section">
      <div className="specials-content">
        <div className="specials-container-header">
          <h1 style={{ color: "white", fontWeight: "400" }}>Specials</h1>
          {!smallWidth && <Link to="/menu" style={{textDecoration:'none'}}><Button>Menu</Button></Link>}
        </div>
        <CardMealList cardsData={data} />
        {smallWidth && (
          <div style={{ marginTop: "20px" }}>
            <Link to="/menu" style={{textDecoration:'none'}}><Button w100={true}>Menu</Button></Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specials;
