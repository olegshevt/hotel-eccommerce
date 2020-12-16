import {
    FETCH_PRODUCTS
} from '../actions/products';

const initialState = {
    products: [],
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:

            return {
                ...state,
                products: action.products,
                loading: false
            }
    }
    return state;
}