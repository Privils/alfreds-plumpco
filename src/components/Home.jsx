import React from "react";
import {  FaWhatsapp } from 'react-icons/fa';


const Home = () => {
  return (
    <>
      <section className="main">
        <div className="mian-content">
          <p className="initial">Plumbing & repairing services</p>
          <p className="initial2">Efficient Residential & Commercial Plumbing Services</p>
          <p className="initial3">
            from leaky faucets and clogged drains to complete system overhauls,
            our expert team is here for all your plumbing needs
          </p>
          <div class="main-buttons">
        <button className="read-more">read more</button>
        <button className="whatsapp"><FaWhatsapp/>whatsapp now</button>
        </div>
        </div>
       
      </section>
    </>
  );
};

export default Home;
