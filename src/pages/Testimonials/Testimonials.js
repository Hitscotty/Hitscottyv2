import React, { useEffect, useContext } from "react";
import testimonialicon from "../../images/icons/handshake.png";
import "./Testimonials.css";
import ConfigContext from "../../config";
const $ = window.$;

function Review(props) {
  return (
    <div className="swiper-slide">
      <div className="col-md-12">
        <div className="client-img center-block">
          <img alt="testimonial" className="center-block" src={props.src} />
        </div>
        <blockquote>
          {props.review}
          <span className="endquote" />
          <cite>{props.author}</cite>
        </blockquote>
      </div>
    </div>
  );
}

const Testimonials = () => {
  const { testimonials } = useContext(ConfigContext);

  useEffect(() => {
    $(function() {
      $("body").append(`
            <script>
            new Swiper('.swiper-container-clients', {
              pagination: '.swiper-pagination-clients',
              a11y: true,
              keyboardControl: true,
              autoHeight: true,
              speed: 800,
              paginationClickable: true
            });
          </script>
            `);
    });
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-title">
          <h4 className="text-uppercase text-center">
            <img src={testimonialicon} alt="demo" />
            Testimonials
          </h4>
        </div>
        <div id="testimonials-card" className="row card">
          <div className="col-md-12 col-xs-12">
            <div
              id="clients-slider"
              className="swiper-container swiper-container-clients"
            >
              <div className="swiper-wrapper">
                {testimonials.reviews.map(t => (
                  <Review
                    key={t.author}
                    review={t.review}
                    src={t.src}
                    author={t.author}
                  />
                ))}
              </div>
              <div className="swiper-pagination swiper-pagination-clients" />
            </div>
          </div>
        </div>
        <div id="clients">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="clients-wrap">
                  <blockquote>
                    "{testimonials.featured.review}"
                    <cite>{testimonials.featured.author}</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
