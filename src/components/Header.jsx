import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
   <>   
   <header>
    <nav>
        <div className='icons'>
        <h1>Alfred Plumbing Maintenance And Renovations</h1>
          <FaInstagram/>
          <FaWhatsapp />
        </div>
        <ul>
           <li>home</li>
           <li>services</li>
           <li>about</li>
           <li>Projects</li>
           <li>Contact</li>
        </ul>
        <div>
       <FaPhone />
       <p className='call-us'>
       Got a Plumbing Emergency? Call us 24/7:
       <span className="phone">+27 84 051 5349</span>
       </p>
        </div>
    </nav>
   </header>
   </>
  )
}

export default Header
