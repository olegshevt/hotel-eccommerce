import {
    FETCH_SEARCH
} from '../actions/search';

const initialState = {
    items: [],
    loaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH:
            const setProduct = action.search;

            var loader;
            if (setProduct.length !== 0) {
                loader = true;
            }

            console.log(loader, 'LOADER')

            const converter = (data) => {
                const result = [];
                data.forEach(x => result[x._id] = x);
                return result;
            }

            return {
                ...state,
                items: converter(setProduct),
                loaded: loader
            }
    }
    return state;
}