import axios from 'axios';
import Cart from "../../models/cart";
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_ITEM_FROM_FAVOURITE = 'REMOVE_ITEM_FROM_FAVOURITE';
export const FETCH_FAVOURITE = 'FETCH_FAVOURITE';

export const fetchFavourite = (userId) => {
    return async dispatch => {
        try {
            const response = await axios({ method: 'post', url: 'http://localhost:3000/api/favourite', data: { userId } });
            const resData = await response.data.products;

            console.log(resData, 'FV RESO')

            const loadedFavourite = [];

            for (const key in resData) {
                loadedFavourite.push(new Cart(
                    resData[key].productId._id,
                    resData[key].productId.title,
                    resData[key].productId.imageUrl,
                    resData[key].quantity,
                    resData[key].productId.price,
                    resData[key].total,
                    resData[key].productId.categoryId.title
                ))
            }
            // console.log(loadedFavourite, 'zzz')
            dispatch({ type: FETCH_FAVOURITE, items: loadedFavourite });

        } catch (error) {
            throw error;
        }
    }
}

export const addToFavourite = (productId, userId) => {
    return async dispatch => {
        const response = await axios({ method: 'post', url: 'http://localhost:3000/api/add-favourite', data: { productId, userId } });
        const resData = await response.data.product;

        dispatch({
            type: ADD_TO_FAVOURITE,
            items: resData
        });
    };
};

export const removeItemFromFavourite = (productId, userId) => {
    return async dispatch => {
        const response = await fetch(
            'http://localhost:3000/api/delete-favourite',
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
            type: REMOVE_ITEM_FROM_FAVOURITE,
            favourite: productId
        });
    };
};
