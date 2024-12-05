import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaPhone, FaBars } from 'react-icons/fa';
import { Link } from 'react-router';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>   
      <header>
        <div className="icons-header">
          <h1 className="head">Alfred Plumbing Maintenance And Renovations</h1>
          <div>
            <FaInstagram className="icon"/>
            <FaWhatsapp className="icon whats-app" />
          </div>
        </div>
        <nav>
          <div className="navComponents">
            <ol className={menuOpen ? 'active' : ''}>
              <ul>
                <li><Link to="/">home</Link></li>
                <li><a href="#">services</a></li>
                <li><a href="#">about</a></li>
                <li><Link to="/projects">projects</Link></li>
                <li><a href="#">contact</a></li>
              </ul>
            </ol>
            {/* Wrap phone container here so it also gets toggled */}
            <div className={menuOpen ? 'active' : ''} id="phone-container">
              <FaPhone className="FaPhone" />
              <p className="call-us">
                Got a Plumbing Emergency? Call us 24/7: <br />
                <span className="phone">+27 84 051 5349</span>
              </p>
            </div>
          </div>

          {/* Hamburger Icon */}
          <label htmlFor="check" className="checkbtn">
            <FaBars className="Bars" onClick={toggleMenu} aria-label="Toggle navigation"/>
          </label>
        </nav>
      </header>
    </>
  );
};

export default Header;












// import React, { useState } from 'react';
// import { FaInstagram, FaWhatsapp, FaPhone, FaBars } from 'react-icons/fa';
// import { Link } from 'react-router';

// const Header = () => {

//    const [menuOpen, setMenuOpen] = useState(false);

//    const toggleMenu = () => {
//      setMenuOpen(!menuOpen);
//    };

//   return (
//    <>   
//    <header>
//    <div className='icons-header'>
//         <h1 className="head">Alfred Plumbing Maintenance And Renovations</h1>
//          <div>
//          <FaInstagram className='icon'/>
//          <FaWhatsapp className='icon whats-app' />
//          </div>
//         </div>
//     <nav>
//        {/* <div className='navComponents'> */}
//        <ol  className={menuOpen ? 'active' : ''}>
//         <ul>
//         <li>
//             <Link to='/'>home</Link>
//          </li>
//            <li><a href="#">services</a></li>
//            <li><a href="#">about</a></li>
//            <li>
//             <Link to='/projects'>projects</Link></li>
//            <li><a href="#">contact</a></li>
//         </ul>
//            <div className={menuOpen ? 'active' : ''} id='phone-container'>
//            <FaPhone className='FaPhone'/>
//        <p className='call-us'>
//        Got a Plumbing Emergency? Call us 24/7: <br />
//        <span className="phone">+27 84 051 5349</span>
//        </p>
//         </div>
//         </ol>

//           <label htmlFor="check" className="checkbtn">
//          <FaBars className="Bars" onClick={toggleMenu} aria-label="Toggle navigation"/>
//           </label>
//     </nav>
//    </header>
//    </>
//   )
// }

// export default Header
   {/* <div className="icon">☎</div>
          <div className="icon">✔</div> */}