import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from './reducers/products';
import productReducer from './reducers/product';
import cartReducer from './reducers/cart';
import ordersReducer from './reducers/orders';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';
import favouriteReducer from './reducers/favourite';
import categoriesReducer from './reducers/categories';
import searchReducer from './reducers/search';
import newsReducer from './reducers/news';
import newsItemReducer from './reducers/news_item';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
    user: userReducer,
    categories: categoriesReducer,
    favourite: favouriteReducer,
    search: searchReducer,
    news: newsReducer,
    news_item: newsItemReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
