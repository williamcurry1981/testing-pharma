import React, { useState } from 'react'
import './nav.css'
import Logo from '../../../assets/testing_pharma.svg';
import { pageScroll } from '../../../Utils/PageScroll';
import openIcon from '../../../assets/open_menu.svg';
import closeIcon from '../../../assets/close_menu.svg';


const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='header-navbar'>
            <div className="container nav-container">
                <div className="header-nav-wrapper">
                    <div className="nav-logo-wrapper">
                        <div className="nav-logo" onClick={() => {
                            window.scrollTo(0, 0);
                        }}>
                            <img src={Logo} alt="testing-pharma" />
                        </div>
                        <div className="hamgur-bar" onClick={() => setOpen(!open)}>
                            <img src={open ? closeIcon : openIcon} alt="testing pharma" />
                        </div>
                    </div>
                    <ul className={`nav-items ${open && "nav-items-active"}`}>
                        <li onClick={() => { setOpen(!open); pageScroll("how-operate") }}>HOW WE OPERATE</li>
                        <li onClick={() => { setOpen(!open); pageScroll("contact") }}>CONTACT US TO PURCHASE</li>
                        <li onClick={() => { setOpen(!open); pageScroll("verify-lab-test") }}>VERIFY A LAB TEST</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav