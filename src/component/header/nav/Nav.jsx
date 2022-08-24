import React from 'react'
import './nav.css'
import Logo from '../../../assets/testing_pharma.png';
const Nav = () => {
    return (
        <nav>
            <div className="container flex align_center justify_between">
                <div>
                    <img src={Logo} alt="testting pharma" />
                </div>
                <ul className="nav-items">
                    <li>HOW WE OPERATE</li>
                    <li>CONTACT US TO PURCHASE</li>
                    <li>VERIFY A LAB TEST</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav