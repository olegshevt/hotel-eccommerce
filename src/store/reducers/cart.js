import { FETCH_CART, ADD_TO_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_ITEM_FROM_CART } from "../actions/cart";
import Cart from "../../models/cart";

const initialState = {
    items: [],
    totalPrice: 0,
    loading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART:
            const setProduct = action.items;
            const converter = (data) => {
                const result = [];
                data.forEach(x => result[x._id] = x);
                return result;
            }
            const cartTotalPrice = (arr) => arr.reduce((sum, obj) => obj.total + sum, 0);

            return {
                ...state,
                items: converter(setProduct),
                totalPrice: cartTotalPrice(setProduct),
                loading: false
            }

        case ADD_TO_CART:
            const addedProduct = action.cart;
            const _id = addedProduct._id;
            const title = addedProduct.title;
            const imageUrl = addedProduct.imageUrl;
            const price = addedProduct.price;

            let updatedOrNewCartItem;
            if (state.items[addedProduct._id]) {
                updatedOrNewCartItem = new Cart(
                    _id,
                    title,
                    imageUrl,
                    state.items[addedProduct._id].quantity + 1,
                    price,
                    state.items[addedProduct._id].total + price
                )
            } else {
                updatedOrNewCartItem = new Cart(_id, title, imageUrl, 1, price, price)
            }

            return {
                ...state,
                items: { ...state.items, [_id]: updatedOrNewCartItem },
                totalPrice: state.totalPrice + price
            }
        case CLEAR_CART:

            return {
                items: [],
                totalPrice: 0
            }

        case REMOVE_ITEM_FROM_CART:
            // console.log(state.items, 'BREEENX')

            const transformedItems = [];
            for (const key in state.items) {
                transformedItems.push({
                    _id: key,
                    title: state.items[key].title,
                    imageUrl: state.items[key].imageUrl,
                    price: state.items[key].price,
                    quantity: state.items[key].quantity,
                    total: state.items[key].total,
                })
            }
            const upds = transformedItems.filter(items => {
                return items._id !== action.cart
            });

            const specificProductTotalPrice = (arr) => arr.reduce((sum, obj) => obj.total + sum, 0);

            return {
                ...state,
                items: upds,
                totalPrice: 0
            }


        case PLUS_CART_ITEM:
            const plusProduct = action.cart;
            const plusId = plusProduct._id;
            const plusTitle = plusProduct.title;
            const plusImageUrl = plusProduct.imageUrl;
            const plusPrice = plusProduct.price;

            let updatedPlusCartItem;
            if (state.items[plusProduct._id]) {
                updatedPlusCartItem = new Cart(
                    plusId,
                    plusTitle,
                    plusImageUrl,
                    state.items[plusProduct._id].quantity + 1,
                    plusPrice,
                    state.items[plusProduct._id].total + plusPrice
                )
            }
            return {
                ...state,
                items: { ...state.items, [plusId]: updatedPlusCartItem },
                totalPrice: state.totalPrice + plusPrice
            }

        case MINUS_CART_ITEM:
            const minusProduct = action.cart;
            const minusId = minusProduct._id;
            const minusTitle = minusProduct.title;
            const minusImageUrl = minusProduct.imageUrl;
            const minusPrice = minusProduct.price;

            let updatedMinusCartItem;
            if (state.items[minusProduct._id]) {
                updatedMinusCartItem = new Cart(
                    minusId,
                    minusTitle,
                    minusImageUrl,
                    state.items[minusProduct._id].quantity - 1,
                    minusPrice,
                    state.items[minusProduct._id].total - minusPrice
                )
            }
            return {
                ...state,
                items: { ...state.items, [minusId]: updatedMinusCartItem },
                totalPrice: state.totalPrice + minusPrice
            }

    }
    return state;
}