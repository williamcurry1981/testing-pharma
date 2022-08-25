import React from 'react'
import './nav.css'
import Logo from '../../../assets/testing_pharma.png';
import { pageScroll } from '../../../Utils/PageScroll';


const Nav = () => {

    return (
        <nav className='header-navbar'>
            <div className="container">
                <div className="header-nav-wrapper  flex align_center justify_between">
                <div className="nav-logo" onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                    <img src={Logo} alt="testing-pharma" />
                </div>
                <ul className="nav-items">
                    <li onClick={() => pageScroll("how-operate")}>HOW WE OPERATE</li>
                    <li onClick={() => pageScroll("contact")}>CONTACT US TO PURCHASE</li>
                    <li onClick={() => pageScroll("verify-lab-test")}>VERIFY A LAB TEST</li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav