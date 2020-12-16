import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { Products } from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import * as searchActions from '../store/actions/search';
import * as favouriteActions from '../store/actions/favourite';
import * as cartActions from '../store/actions/cart';


export const Search = ({ onSearch }) => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const loaded = useSelector(state => state.search.loaded);

    const handleAddToCart = React.useCallback((obj) => {
        dispatch(cartActions.addToCart(obj));
    }, [dispatch]);

    const handleAddToFavourite = React.useCallback((obj) => {
        dispatch(favouriteActions.addToFavourite(obj));
    }, [dispatch]);

    const searchItems = useSelector(state => {
        const transformedItems = [];
        for (const key in state.search.items) {
            transformedItems.push({
                _id: key,
                title: state.search.items[key].title,
                imageUrl: state.search.items[key].imageUrl,
                price: state.search.items[key].price,
                quantity: state.search.items[key].quantity,
                total: state.search.items[key].total,
                category: state.search.items[key].category,
            })
        }
        return transformedItems;
    })

    // const handleSearch = React.useCallback((childDataSecond) => {
    //     dispatch(searchActions.fetchSearch(childDataSecond));
    // }, [dispatch]);


    return (
        <>
            <Header />
            {/* <Header parentCallBackSecond={handleSearch} /> */}
            <div className="page-body">
                <div className="container">
                    <h1 className="text-center">Search results</h1>
                    {loaded ? (
                        <div className="row">
                            <div className="page-content">
                                <div className="catalog row">
                                    {searchItems.map((product, index) => (<Products
                                        key={product._id}
                                        {...product}
                                        linkAddress={`/product/${product._id}`}
                                        category={product.category.title}
                                        addToCart={handleAddToCart}
                                        addToFavourite={handleAddToFavourite}
                                    />))
                                    }
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    ) : (
                            <div className="text-center">
                                <p>Sorry, we could not find any product for your criteria.</p></div>
                        )}
                </div>
            </div>
            <Footer />
        </>
    )
}
