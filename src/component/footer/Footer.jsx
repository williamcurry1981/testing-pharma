import React from 'react'
import './footer.css'
import footerImg from '../../assets/footer_logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="footer-nav-items">
          <li>HOW WE OPERATE</li>
          <li>CONTACT US TO PURCHASE</li>
          <li>VERIFY A LAB TEST</li>
        </ul>
        <div className="footer-img-box">
          <img src={footerImg} alt=""/>
        </div>
        <p>© TESTING PHARMA 2022</p>
        <p>Saavedra 542, Santa Cruz de la Sierra, Bolivia</p>
      </div>
    </footer>
  )
}

export default Footer;