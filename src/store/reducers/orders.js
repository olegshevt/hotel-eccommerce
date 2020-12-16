import { ADD_ORDER, FETCH_ORDERS } from "../actions/orders";
import Order from "../../models/order";


const initialState = {
    orders: [],
    loading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:

            const dateToFormat = '1976-04-19T12:59-0500';
            // <Moment date={dateToFormat} />

            const newOrder = new Order(
                action.order._id,
                action.order.total,
                action.order.date,
                action.order.status,
            )
            return {
                ...state,
                orders: newOrder,
                loading: true
            }

        case FETCH_ORDERS:
            const setOrders = action.items;
            console.log(setOrders, 'MY ORDE')

            return {
                ...state,
                orders: setOrders,
                loading: false
            }
    }
    return state;
}