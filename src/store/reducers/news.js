import {
    FETCH_NEWS
} from '../actions/news';

const initialState = {
    news: [],
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                news: action.items,
                loading: false
            }
    }
    return state;
}