import React from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import image from "./images/service-1.jpg";
import image1 from "./images/service-2.jpg";
import image2 from "./images/service-3.jpg";
import image3 from './images/about-1.jpg'

const Home = () => {
  return (
    <>
      <section className="main">
        <div className="mian-content">
          <p className="initial">Plumbing & repairing services</p>
          <p className="initial2">
            Efficient Residential & Commercial Plumbing Services
          </p>
          <p className="initial3">
            from leaky faucets and clogged drains to complete system overhauls,
            our expert team is here for all your plumbing needs
          </p>
          <div class="main-buttons">
            <button className="read-more">read more</button>
            <button className="whatsapp">
              <FaWhatsapp />
              whatsapp now
            </button>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="houser">
          <div className="cards">
            <img src={image} alt="" className="card-img" />
            <div className="card-text">
              <span>
                Residential Plumbing <FaArrowRight className="FaArrowRight" />
              </span>
            </div>
          </div>
          <div className="cards">
            <img src={image1} alt="" className="card-img" />
            <div className="card-text">
              <span>
                Commercial Plumbing <FaArrowRight className="FaArrowRight" />
              </span>
            </div>
          </div>
          <div className="cards">
            <img src={image2} alt="" className="card-img" />
            <div className="card-text">
              <span>
                Emergency Servicing <FaArrowRight className="FaArrowRight" />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* fix this section */}
      <section className="about">
        <h4>about us</h4>
        <div>
          <div className="about-text">
            <h1>We Are A Trusted Plumbing Company</h1>
            <p>
              Need a reliable plumber in Cape Town? Look no further than Alfred
              Plumbing! We offer fast, affordable, and guaranteed plumbing
              services for homes and businesses throughout the city. From leaky
              faucets to complete renovations, our expert team is here to help.
              Get a free quote today and experience the Alfred Plumbing
              difference!
            </p>
              <ul>
                <li>
                Residential & commercial plumbing
                </li>
                <li>
                Quality services at affordable prices
                </li>
                <li>
                Immediate 24/ 7 emergency services
                </li>
              </ul>
              <div>
                //phoone
              </div>
          </div>
          <div className="about-us-img-container">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
