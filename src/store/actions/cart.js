import Cart from "../../models/cart";
import axios from 'axios';
export const FETCH_CART = 'FETCH_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const fetchCart = (userId) => {
    return async dispatch => {
        try {
            const response = await axios({ method: 'post', url: 'http://localhost:3000/api/cart', data: { userId } });
            const resData = await response.data.products;
            const loadedCart = [];

            for (const key in resData) {
                loadedCart.push(new Cart(
                    resData[key].productId._id,
                    resData[key].productId.title,
                    resData[key].productId.imageUrl,
                    resData[key].quantity,
                    resData[key].productId.price,
                    resData[key].total,
                    resData[key].productId.categoryId.title
                ))
            }
            dispatch({ type: FETCH_CART, items: loadedCart });

        } catch (error) {
            throw error;
        }
    }
}

export const addToCart = (productId, userId) => {
    return async dispatch => {
        const response = await axios({ method: 'post', url: 'http://localhost:3000/api/add-cart', data: { productId, userId } });

        const resData = await response.data.product;

        dispatch({
            type: ADD_TO_CART,
            cart: resData
        });
    };
};

export const removeItemFromCart = (productId, userId) => {
    return async dispatch => {
        const response = await fetch(
            'http://localhost:3000/api/delete-cart',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId, userId
                })
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            cart: productId
        });
    };
};

export const clearCart = (userId) => {
    return async dispatch => {
        const response = await fetch(
            'http://localhost:3000/api/clear-cart',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId
                })
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const resData = await response.json();
        dispatch({
            type: CLEAR_CART,
            cart: resData
        });
    };
};

export const plusCartItem = (productId, userId) => {
    return async dispatch => {
        const response = await axios({ method: 'post', url: 'http://localhost:3000/api/cart-plus', data: { productId, userId } });
        const resData = await response.data.product;

        dispatch({
            type: PLUS_CART_ITEM,
            cart: resData
        });
    };
};

export const minusCartItem = (productId, userId) => {
    return async dispatch => {
        const response = await axios({ method: 'post', url: 'http://localhost:3000/api/cart-minus', data: { productId, userId } });
        const resData = await response.data.product;

        dispatch({
            type: MINUS_CART_ITEM,
            cart: resData
        });
    };
};
