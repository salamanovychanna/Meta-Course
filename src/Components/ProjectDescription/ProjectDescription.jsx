import { useEffect, useState } from "react";
import "./ProjectDescription.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const ProjectDescription = () => {
  const [width, setWidth] = useState("big");
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setWidth("small");
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 800) {
      setWidth("small");
    } else setWidth("big");
  });
  return (
    <section id="about" className="project-description-section">
      <div className="project-description-content">
        <div className="project-description-text-section">
          <h1
            style={{ fontWeight: "400", marginBottom: "29px", color: "white" }}>
            Little Lemon
          </h1>
          <p style={{ color: "white" }}>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later. <br />
            
          </p>
          {width === "big" ? (
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio mollitia quisquam accusamus sed magnam quasi
                delectus. Fugit libero cum cupiditate animi aspernatur, iste,
                magni exercitationem eum dolore beatae provident earum facere
                ratione sit ab! Voluptates officia, fugit aspernatur numquam
                incidunt omnis voluptate veritatis ipsum vel, quos delectus ad
                inventore ipsa quas nam nesciunt cupiditate, asperiores saepe
                mollitia deserunt error! Nemo reiciendis natus quas veritatis,
                aliquid, nihil accusantium porro rerum eius voluptas sint illum!
              </p>
            ) : null}
        </div>
        {width === "big" ? (
          <div className="project-description-img-section">
            <ImageWrapper
              classNameString="project-description-img project-description-img-1"
              srcString="https://little-lemon-booking-website.vercel.app/static/media/MarioAdrianA.6ba0e06bfa9c1ea75109.jpg"
              altString="two brothers cooking"
              hash="LaH_[L_NtRV@9FIUV@oeM{oe%Nxu"
              heightValue={300}
              widthValue={260}
            />
            <ImageWrapper
              classNameString="project-description-img project-description-img-2"
              srcString="https://little-lemon-booking-website.vercel.app/static/media/MarioAdrianB.7f44c6d6e341a27d14b3.jpg"
              altString="two brothers cooking"
              hash="L8G[sM~qGarD004n9FT000D*%M%1"
              heightValue={260}
              widthValue={243}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectDescription;
