import {
    FETCH_NEWS_ITEM
} from '../actions/news_item';

const initialState = {
    news: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_ITEM:

            return {
                ...state,
                news: action.item,
            }
    }
    return state;
}