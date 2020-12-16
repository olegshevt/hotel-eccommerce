import {
    FETCH_PRODUCT
} from '../actions/product';

const initialState = {
    product: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                product: action.product,
            }
    }
    return state;
}