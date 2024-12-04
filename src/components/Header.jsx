import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router';

const Header = () => {
  return (
   <>   
   <header>
   <div className='icons-header'>
        <h1 className="head">Alfred Plumbing Maintenance And Renovations</h1>
         <div>
         <FaInstagram className='icon'/>
         <FaWhatsapp className='icon whats-app' />
         </div>
        </div>
    <nav>
       <div className='navComponents'>
       <ul>
         <li>
            <Link to='/'>home</Link>
         </li>
           <li><a href="#">services</a></li>
           <li><a href="#">about</a></li>
           <li>
            <Link to='/projects'>projects</Link></li>
           <li><a href="#">contact</a></li>
        </ul>
        <div className='phone-container'>
       <FaPhone className='FaPhone'/>
       <p className='call-us'>
       Got a Plumbing Emergency? Call us 24/7: <br />
       <span className="phone">+27 84 051 5349</span>
       </p>
        </div>
       </div>
        
    </nav>
   </header>
   </>
  )
}

export default Header
