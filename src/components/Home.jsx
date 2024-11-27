import React from "react";
import { FaWhatsapp, FaArrowRight, FaPhone } from "react-icons/fa";
import image from "./images/service-1.jpg";
import image1 from "./images/service-2.jpg";
import image2 from "./images/service-3.jpg";
import image3 from './images/about-1.jpg';
import image4 from './images/about-1.jpg';
import image5 from './images/about-2.jpg';

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
        <div className="a-bout">
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
              <div className='phone-container inAbout'>
       <FaPhone className='FaPhone'/>
       <p className='call-us-about'>
       Got a Plumbing Emergency? Call us 24/7: <br />
       <span className="phone">+27 84 051 5349</span>
       </p>
        </div>
          </div>
          <div className="about-us-img-container">
            <img src={image4} alt="" />
          </div>
        </div>
      </section>
      <section className="services">

        <div className="years">
          <p>
            15 years experience
          </p>
        </div>

        <div className="services-container">
          <h3>our services</h3>
          <p className="Explore-Our-Services">Explore Our Services</p>
          <p className="offer-text">
          We offer a wide range of plumbing services to meet your needs, all with no <span className="callout-fee">callout fee</span>
          </p>
          <div className="cards-container">
           <div className="service-cards">
            <span>icon</span>
            <h2>
            Drain Repair
            </h2>
            <p>
            Whether it's a clogged drain, slow drainage, or a more complex problem, we provide effective solutions tailored to your needs.
            </p>
           </div>
           <div className="service-cards">
           <span>icon</span>
            <h2>
            Toilet Pipe Repair
            </h2>
            <p>
            From fixing leaks to addressing pipe blockages, our team ensures that your toilet plumbing is functioning optimally.
            </p>
           </div>
           <div className="service-cards">
           <span>icon</span>
            <h2>
            Sewer Line Repair
            </h2>
            <p>
            Our team is adept at diagnosing and resolving sewer line issues, ensuring the integrity of your plumbing system.
            </p>
           </div>
           <div className="service-cards">
           <span>icon</span>
            <h2>
            Water Heater Repair
            </h2>
            <p>
            Whether you're experiencing issues with temperature control or a complete breakdown, our skilled technicians deliver efficient solutions.
            </p>
           </div>
           <div className="service-cards">
           <span>icon</span>
            <h2>
            Burst Geyser Replacement
            </h2>
            <p>
            Our skilled technicians are equipped to handle urgent geyser replacements, ensuring your hot water supply is restored efficiently.
            </p>
           </div>
           <div className="service-cards">
           <span>icon</span>
            <h2>
            Emergency Plumbing Services
            </h2>
            <p>
            Whether it's a burst pipe, sudden leaks, or any plumbing emergency, we are here to provide immediate assistance with quality service and customer satisfaction guaranteed.
            </p>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
