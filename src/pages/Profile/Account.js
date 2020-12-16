import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Profile/Menu';
import { Link } from 'react-router-dom';
import icon1 from '../../public/i/ic-1.svg';
import icon2 from '../../public/i/ic-2.svg';
import icon3 from '../../public/i/ic-3.svg';
import icon4 from '../../public/i/ic-4.svg';
import icon5 from '../../public/i/ic-7.svg';

export const Account = () => {
    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <h1>My account</h1>

                    <div class="cabinet">
                        <div class="cabinet-content">
                            <div class="cabinet-main-menu">
                                <div class="item">
                                    <Link to="/orders"></Link>
                                    <div class="icon"><img src={icon1} alt="" /></div>
                                    <div class="text">Order history</div>
                                </div>
                                <div class="item">
                                    <Link to="/cart"></Link>
                                    <div class="icon"><img src={icon2} alt="" /></div>
                                    <div class="text">Shopping cart</div>
                                </div>
                                <div class="item">
                                    <Link to="/profile"></Link>
                                    <div class="icon"><img src={icon3} alt="" /></div>
                                    <div class="text">Profile</div>
                                </div>

                            </div>
                        </div>
                        <Menu />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}