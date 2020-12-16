import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Menu } from '../../components/Profile/Menu';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/actions/user';
import Input from '../../components/UI/Input/Input';
import { updateObject, checkValidity } from '../../utility/utility';
import Spinner from '../../components/UI/Spinner/Spinner';

export const Profile = props => {
    const dispatch = useDispatch();

    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <h1>Your profile</h1>

                    <div class="cabinet">
                        <div class="cabinet-content">

                            <div class="personal-data">
                                <div class="personal-data--section">
                                    <div class="personal-data--item">
                                        <h3>Personal information:</h3>
                                        <p>First name: John</p>
                                        <p>Last name: Waterman</p>
                                        <p>E-mail: info@info.ru</p>
                                    </div>
                                </div>
                                <div class="personal-data--section">
                                    <div class="personal-data--item">
                                        <h3>Delivery address:</h3>
                                        <p>City: New York</p>
                                        <p>Street adress: Columbus, 20</p>
                                        <p>Appartment: 290</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/edit-profile"><span class="link-cancel">Edit profile</span></Link>
                                </div>
                            </div>

                        </div>
                        <Menu />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};