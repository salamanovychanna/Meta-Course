import Button from "../Button";
import { useSelector } from "react-redux";
import "./Specials.css";
import CardMealList from '../CardMealList'

const Specials = () => {
  const data = useSelector((state) => {
    console.log("1ldldld", state);
    return state.menu.value;
  });
  console.log("data", data);

  return (
    <section className="specials-section">
      <div className="specials-content">
        <div className="specials-container-header">
          <h1 style={{color:'white', fontWeight:'400'}}>Specials</h1>
          <Button>Menu</Button>
        </div>
        <CardMealList cardsData={data} />
      </div>
    </section>
  );
};

export default Specials;
