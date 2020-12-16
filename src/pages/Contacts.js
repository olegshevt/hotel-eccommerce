import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Breadcrumbs } from '../components/Breadcrumbs';


export const Contacts = () => {

    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <Breadcrumbs />
                    <h1>Contacts</h1>

                    <div class="contacts-box">
                        <div class="item">
                            <h3>Phone</h3>
                            <p><a href="tel:+749999999999">+7 (499) 999—99—99</a></p>
                        </div>
                        <div class="item">
                            <h3>E-mail</h3>
                            <p><a href="mailto:kir-ku@rambler.ru">info@info.ru</a></p>
                        </div>
                        <div class="item">
                            <h3>Address</h3>
                            <p>Russia, Moscow, First st., 18, office 33</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}