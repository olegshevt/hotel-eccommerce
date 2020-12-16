import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Clients } from '../components/Clients';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainCategories } from '../components/MainCategories';
import { Question } from '../components/Question';


export const Home = () => {

    return (
        <>
            <Header />
            <MainCategories />
            <Clients />
            <Question />
            <Footer />

        </>
    )
}