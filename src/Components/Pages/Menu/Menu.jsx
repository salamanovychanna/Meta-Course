import { useEffect, useState } from "react";
import Button from "../../Button";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import "./Menu.css";
import { useSelector } from "react-redux";
import CardMeal from "../../CardMeal";

const Menu = () => {
    const [mediumWidth, setMediumWidth] = useState(false);

    const data = useSelector((state) => {
        return state.menu.value;
      });

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
<main>
    <section className="menu-header">
      <div className="menu-header-content">
        <div className="menu-header-text-section">
          <div className="menu-header-title">
            <h1 style={{marginBottom: '20px'}}>Our menu</h1>
            
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <a href="#menu"><Button  bgColor="primary" color="black">
            View menu
          </Button></a>
        </div>
        {!mediumWidth && (
          <ImageWrapper
            classNameString="menu-header-img"
            srcString="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            altString="cooking sushi process"
            hash="L9BVnj?]XOE_xvxInSM|01d=I:=x"
            heightValue={302.4}
            widthValue={378}
          />
        )}
      </div>
    </section>
    <div className="menu-midquote">
        <q><em>Nothing bring people together like good food</em></q>
    </div>
    <section id="menu" className="menu-content">
        <div className="menu-content-container">
            {data.map(({ id, name, img, price, description }) => {
                return <CardMeal classNameString='menu-content-card' key={id} id={id} description={description} name={name} price={price} picture={img}/>
            })}
            <article className="menu-content-extracard"></article>
            <article className="menu-content-extracard"></article>
            <article className="menu-content-extracard"></article>
        </div>
    </section>
    <div className="menu-midquote menu-midquote-yellow">
        <q><em>The only way to get rid of a temptation is to yield to it</em></q>
    </div>
</main>
)
}

export default Menu;