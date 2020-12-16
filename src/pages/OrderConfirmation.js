import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import * as cartActions from '../store/actions/cart';

export const OrderConfirmation = () => {
    const dispatch = useDispatch();

    const order = useSelector(state => state.orders.orders);


    return (
        <>
            <Header onSearchProduct={null} />
            <div className="page-body">
                <div className="container">
                    <h1>Order confirmation:</h1>
                    <div className="basket-page">
                        <p>Order number: #{order._id} - ${order.total} </p>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}