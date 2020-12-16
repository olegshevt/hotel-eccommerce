import axios from 'axios';
import Order from "../../models/order";
export const ADD_ORDER = 'ADD_ORDER';
export const FETCH_ORDERS = 'FETCH_ORDERS';

export const addOrder = (cartItems, total, userId) => {
    return async dispatch => {
        const response = await axios({ method: 'post', url: 'http://localhost:3000/api/make-order', data: { cartItems, total, userId } });
        const resData = await response.data.order;

        dispatch({
            type: ADD_ORDER,
            order: resData
        });
    };
};

export const fetchOrders = (userId) => {
    return async dispatch => {
        try {
            const response = await axios({ method: 'post', url: 'http://localhost:3000/api/orders', data: { userId } });
            const resData = await response.data.orders;
            const loadedOrders = [];

            for (const key in resData) {
                loadedOrders.push(new Order(
                    resData[key]._id,
                    resData[key].total,
                    resData[key].date,
                    resData[key].status,
                ))
            }
            dispatch({ type: FETCH_ORDERS, items: loadedOrders });

        } catch (error) {
            throw error;
        }
    }
}





