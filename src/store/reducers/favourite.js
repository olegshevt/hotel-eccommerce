import { ADD_TO_FAVOURITE, FETCH_FAVOURITE, REMOVE_ITEM_FROM_FAVOURITE } from "../actions/favourite";
import Cart from "../../models/cart";

const initialState = {
    items: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            const addedProduct = action.items;
            // console.log(action.items, 'F ADD')
            const _id = addedProduct._id;
            const title = addedProduct.title;
            const imageUrl = addedProduct.imageUrl;
            const price = addedProduct.price;
            // const category = addedProduct.category;

            let updatedFavouriteItem;
            if (state.items[addedProduct._id]) {
                updatedFavouriteItem = new Cart(
                    _id,
                    title,
                    imageUrl,
                    state.items[addedProduct._id].quantity + 1,
                    price,
                    state.items[addedProduct._id].total + price,
                    // category
                )
            } else {
                updatedFavouriteItem = new Cart(_id, title, imageUrl, 1, price, price)
            }

            return {
                ...state,
                items: { ...state.items, [_id]: updatedFavouriteItem },
            }

        case FETCH_FAVOURITE:

            const setProduct = action.items;
            console.log(setProduct, 'FA SET')

            const converter = (data) => {
                const result = [];
                data.forEach(x => result[x._id] = x);
                return result;
            }
            // const cartTotalPrice = (arr) => arr.reduce((sum, obj) => obj.total + sum, 0);

            console.log(converter(setProduct), 'DISPLAY')

            return {
                ...state,
                items: converter(setProduct),
            }

        case REMOVE_ITEM_FROM_FAVOURITE:
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

            console.log(action.favourite, 'TRANSFORM')
            const upds = transformedItems.filter(items => {
                return items._id !== action.favourite
            });

            // const specificProductTotalPrice = (arr) => arr.reduce((sum, obj) => obj.total + sum, 0);

            return {
                ...state,
                items: upds,
            }

    }
    return state;
}