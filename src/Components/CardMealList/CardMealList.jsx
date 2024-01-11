import CardMeal from "../CardMeal";
import './CardMealList.css';

const CardMealList = ({ cardsData }) => {
  console.log(cardsData);
  return (
    <ul className="card-meal-container">
      {cardsData.map((item) => {
        return <CardMeal
          key={item.id}
          price={item.price}
          name={item.name}
          description={item.description}
          picture={item.img}
        />;
      })}
    </ul>
  );
};

export default CardMealList;
