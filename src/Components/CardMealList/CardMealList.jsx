import CardMeal from "../CardMeal";
import "./CardMealList.css";
import Slider from "react-slick";

const CardMealList = ({ cardsData }) => {
  const sliderSetup = {
    dots: false,
    infinite: true,
    vertical: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // centerMode: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false,
        },
      }

    ],
  };
  return (
    <ul className="card-meal-container">
      <Slider {...sliderSetup}>
        {cardsData.map((item) => {
          return (
            <CardMeal
              key={item.id}
              price={item.price}
              name={item.name}
              description={item.description}
              picture={item.img}
            />
          );
        })}
      </Slider>
    </ul>
  );
};

export default CardMealList;
