import React from 'react';
import { MainMenu } from './MainMenu';
import { Search } from './Search';
import { TopMenu } from './TopMenu';
import favouriteIcon from '../public/i/icon-heart.svg'
import cartIcon from '../public/i/icon-basket.svg'
import profileIcon from '../public/i/icon-profile.svg'
import logo from '../public/i/logo.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../store/actions/auth';


export const Header = props => {

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const handleCallback = (childData) => {
        props.parentCallBackSecond(childData);
    }

    // const handleCallback = (childData) => {
    //     console.log(childData, 'CHILD DATA')
    //     props.parentCallBackSecond(childData);
    //     props.parentCallBackSecond('My second call');
    // }

    const openMenu = () => {
        var element = document.querySelector(".bt-menu");
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            document.querySelector('.nav').style.display = "none";
        } else {
            element.classList.toggle('active');
            document.querySelector('.nav').style.display = "block";
        }
    }



    return (
        <div className="site-header">
            <div className="top-header">
                <div className="container">
                    <div className="row flex-start">
                        <div className="mob-logo"><Link to="/"><img src={logo} alt="" /></Link></div>
                        <TopMenu />
                        <a href="tel:+79999999999" className="phone-no">+7 (499) 999—99—99</a>
                    </div>
                </div>
            </div>

            <div className="bot-header">
                <div className="container">
                    <div className="row">
                        <div className="header-section">
                            <div className="row align-center">
                                <div className="logo"><Link to="/"><img src={logo} alt="" /></Link></div>
                                <MainMenu />


                                <Search parentCallback={handleCallback} />

                            </div>
                        </div>
                        <div className="header-section">
                            <div className="user-bar row flex-between align-center">
                                <Link to="/favourite">
                                    <img src={favouriteIcon} alt="" />
                                </Link>
                                <Link to="/cart"><img src={cartIcon} alt="" /></Link>

                                {token ? <Link to="/account"><span>
                                    <img src={profileIcon} alt="" /></span></Link> :
                                    <Link to="/login">
                                        <span className="auth_block">
                                            <Link to="/login">Login</Link> / <Link to="/registration">Registration</Link>
                                            {/* <img src={profileIcon} alt="" /></span> */}
                                        </span>
                                    </Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mob-nav">
                <div className="container">
                    <div className="row">
                        <div onClick={openMenu} className="bt-menu"><span>

                        </span>меню</div>
                        <div className="search">
                            <div className="form">
                                <input placeholder="Search.." />
                                <div className="close"></div>
                            </div>
                            <div className="bt-search"></div>
                        </div>
                        <a href="" className="basket"></a>
                    </div>
                </div>
            </div>
        </div>

    )
}