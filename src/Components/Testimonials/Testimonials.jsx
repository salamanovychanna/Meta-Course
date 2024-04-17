import { useEffect, useState } from "react";
import "./Testimonials.css";
import Slider from 'react-slick'

const Testimonials = () => {

  const [smallWidth, setSmallWidth] = useState(false)
  useEffect(()=>{
    if (window.innerWidth <=350){
      setSmallWidth(true)
    }
  }, [])

  window.addEventListener('resize', function(event) {
    if (window.innerWidth <=350){
      setSmallWidth(true)
    } else {
      setSmallWidth(false)
    }
});
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
    <section className="testimonials-section">
      <div className="testimonials-content">
        <h1 style={{ fontWeight: "400", marginBottom: "29px" }}>
          Testimonials
        </h1>
        <div className="testimonials-card-section">
        <Slider {...sliderSetup}>
          <article className="testimonials-review-card">
            <div className="testimonials-review-card-header">
              <div className="testimonials-review-card-header-profile">
                <img
                  className="testimonials-avatar-img"
                  src="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="girl"
                  style={{ marginRight: "13px" }}
                />
                <h4 className="testimonials-person-name">Serhii</h4>
              </div>
              {!smallWidth && <svg
                width="119"
                height="21"
                viewBox="0 0 119 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                  fill="white"
                />
                <path
                  d="M35.5 0L38.0819 7.9463H46.4371L39.6776 12.8574L42.2595 20.8037L35.5 15.8926L28.7405 20.8037L31.3224 12.8574L24.5628 7.9463H32.9181L35.5 0Z"
                  fill="white"
                />
                <path
                  d="M59.5 0L62.0819 7.9463H70.4371L63.6776 12.8574L66.2595 20.8037L59.5 15.8926L52.7405 20.8037L55.3224 12.8574L48.5628 7.9463H56.9181L59.5 0Z"
                  fill="white"
                />
                <path
                  d="M83.5 0L86.0819 7.9463H94.4371L87.6776 12.8574L90.2595 20.8037L83.5 15.8926L76.7405 20.8037L79.3224 12.8574L72.5628 7.9463H80.9181L83.5 0Z"
                  fill="white"
                />
                <path
                  d="M107.5 0L110.082 7.9463H118.437L111.678 12.8574L114.26 20.8037L107.5 15.8926L100.74 20.8037L103.322 12.8574L96.5628 7.9463H104.918L107.5 0Z"
                  fill="white"
                />
              </svg>}
            </div>
            <p className="testimonials-text-review">
              Excellent food. Menu is extensive and seasonal to a particularly
              high standard. Definitely fine dining. It can be expensive but
              worth it and they do different deals on different nights so it’s
              worth checking them out before you book. Highly recommended.
            </p>
          </article>
          <article className="testimonials-review-card">
            <div className="testimonials-review-card-header">
              <div className="testimonials-review-card-header-profile">
                <img
                  className="testimonials-avatar-img"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="girl"
                  style={{ marginRight: "13px" }}
                />
                <h4 className="testimonials-person-name">Anna</h4>
              </div>
              {!smallWidth && <svg
                width="119"
                height="21"
                viewBox="0 0 119 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                  fill="white"
                />
                <path
                  d="M35.5 0L38.0819 7.9463H46.4371L39.6776 12.8574L42.2595 20.8037L35.5 15.8926L28.7405 20.8037L31.3224 12.8574L24.5628 7.9463H32.9181L35.5 0Z"
                  fill="white"
                />
                <path
                  d="M59.5 0L62.0819 7.9463H70.4371L63.6776 12.8574L66.2595 20.8037L59.5 15.8926L52.7405 20.8037L55.3224 12.8574L48.5628 7.9463H56.9181L59.5 0Z"
                  fill="white"
                />
                <path
                  d="M83.5 0L86.0819 7.9463H94.4371L87.6776 12.8574L90.2595 20.8037L83.5 15.8926L76.7405 20.8037L79.3224 12.8574L72.5628 7.9463H80.9181L83.5 0Z"
                  fill="white"
                />
                <path
                  d="M107.5 0L110.082 7.9463H118.437L111.678 12.8574L114.26 20.8037L107.5 15.8926L100.74 20.8037L103.322 12.8574L96.5628 7.9463H104.918L107.5 0Z"
                  fill="white"
                />
              </svg>}
            </div>
            <p className="testimonials-text-review">
              I have to say, I enjoyed every single bite of the meal in Little
              Lemon. I had a 3 course meal, with a couple of beers. Considering
              the quality, the price is reasonable. Ideal for those who want a
              romantic night out. There was also plenty of room for bigger
              groups.
            </p>
          </article>
          <article className="testimonials-review-card">
            <div className="testimonials-review-card-header">
              <div className="testimonials-review-card-header-profile">
                <img
                  className="testimonials-avatar-img"
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="girl"
                  style={{ marginRight: "13px" }}
                />
                <h4 className="testimonials-person-name">Max</h4>
              </div>
              {!smallWidth && <svg
                width="119"
                height="21"
                viewBox="0 0 119 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                  fill="white"
                />
                <path
                  d="M35.5 0L38.0819 7.9463H46.4371L39.6776 12.8574L42.2595 20.8037L35.5 15.8926L28.7405 20.8037L31.3224 12.8574L24.5628 7.9463H32.9181L35.5 0Z"
                  fill="white"
                />
                <path
                  d="M59.5 0L62.0819 7.9463H70.4371L63.6776 12.8574L66.2595 20.8037L59.5 15.8926L52.7405 20.8037L55.3224 12.8574L48.5628 7.9463H56.9181L59.5 0Z"
                  fill="white"
                />
                <path
                  d="M83.5 0L86.0819 7.9463H94.4371L87.6776 12.8574L90.2595 20.8037L83.5 15.8926L76.7405 20.8037L79.3224 12.8574L72.5628 7.9463H80.9181L83.5 0Z"
                  fill="white"
                />
                <path
                  d="M107.5 0L110.082 7.9463H118.437L111.678 12.8574L114.26 20.8037L107.5 15.8926L100.74 20.8037L103.322 12.8574L96.5628 7.9463H104.918L107.5 0Z"
                  fill="white"
                />
              </svg>}
            </div>
            <p className="testimonials-text-review">
              This place is great! Atmosphere is chill and cool but the staff is
              also really friendly. They know what they’re doing and what
              they’re talking about, and you can tell making the customers happy
              is their main priority. Food is pretty good, some italian classics
              and some twists, and for their prices it’s 100% worth it.
            </p>
          </article>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
