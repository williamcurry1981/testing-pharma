import React from 'react';
import Banner from './banner/Banner';
import Nav from './nav/Nav';
import BannerBottom from './banner-bottom/BannerBottom';
const Header = () => {
    return (
        <header>
            <Nav />
            <Banner />
            <BannerBottom />
        </header>
    )
}

export default Header