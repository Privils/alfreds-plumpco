import React, { useEffect } from 'react';
import { FaWhatsapp, FaArrowRight, FaPhone, FaWater, FaToilet, FaWrench, FaTemperatureLow, FaTint, FaHotTub, FaEnvelope, FaMapMarkerAlt, FaGreaterThan, FaInstagram} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  return (
    <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <h3>Address</h3>
      <p><FaMapMarkerAlt/> 73 Upper Queens Road, Walmer Estate, Cape Town</p>
      <p><FaPhone/>Phone: +27 84 051 5349</p>
      <p><FaEnvelope/>  Email: alfred@alfredplumbing.co.za</p>
      <p>
        <FaWhatsapp className="whatapp"/>
        <FaInstagram className="insta" />
      </p>
    </div>

    <div className="footer-column">
      <h3>Openings</h3>
      <p>Monday - Friday: <br />
      <span>Always Open</span>
      </p>
      <p>Saturday - Sunday: <br />
      <span>
        Always open</span></p>
    </div>

    <div className="footer-column">
      <h3>Services</h3>
      <ul>
        <li><a href="#"> <FaGreaterThan/>  burst geyser replacement</a></li>
        <li><a href="#"> <FaGreaterThan/>  drain laying</a></li>
        <li><a href="#"> <FaGreaterThan/> sewer line</a></li>
        <li><a href="#"> <FaGreaterThan/>  water heating</a></li>
        <li><a href="#"> <FaGreaterThan/> brocken pipe</a></li>
        <li><a href="#"> <FaGreaterThan/> plumbing noise diagnosis & repair</a></li>
        <li><a href="#"><FaGreaterThan/> emergency services</a></li>
        <li><a href="#"><FaGreaterThan/> bathroom renovations</a></li>
        <li><a href="#"><FaGreaterThan/>  maintanance</a></li>
      </ul>
    </div>
  </div>
  <hr />
  <div className="copy">
<p> &copy; Alfred Plumbing, All Rights Reserved.</p>
<p>Developed and designed by <span className='Priv'> PrivilsWebDev</span></p>
  </div>
</footer>
    </div>
  )
}

export default Footer
