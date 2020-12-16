import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Menu } from '../components/Profile/Menu';
import { useDispatch, useSelector } from 'react-redux';
import * as ordersActions from '../store/actions/orders';
import Moment from 'react-moment';

export const Orders = props => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const orders = useSelector(state => state.orders.orders);
    const loading = useSelector(state => state.orders.loading);

    React.useEffect(() => {
        dispatch(ordersActions.fetchOrders(userId));
    }, [dispatch, userId]);

    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <h1>Orders history</h1>

                    <div class="cabinet">
                        <div class="cabinet-content">
                            {!loading ? (
                                <div class="orders-history">
                                    {orders.map((item, index) => (
                                        <div key={index} class="orders-history--item">
                                            <div class="head">
                                                <div class="title">Заказ №{item._id} на сумму {item.total} руб.</div>
                                                <div class="info">
                                                    <div class="status-completed">{item.status}</div>
                                                    <div class="date"><Moment parse="YYYY-MM-DD HH:mm">{item.date}</Moment></div>
                                                </div>
                                            </div>
                                            <div class="orders--tools">
                                                <a href="" class="icon-repeat">Повторить заказ</a>
                                                <a href="" class="icon-info">Подробнее о заказе</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                    <div class="orders-history">
                                        <p>You do not have orders yet.</p>
                                    </div>
                                )}
                        </div>
                        <Menu />
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )



}