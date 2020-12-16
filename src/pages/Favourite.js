import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { Products } from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import * as favouriteActions from '../store/actions/favourite';
import * as cartActions from '../store/actions/cart';
import { useHistory } from 'react-router-dom';


const Favourite = props => {
    const dispatch = useDispatch();
    let history = useHistory();
    const favourite = useSelector(state => state.favourite.items);
    const userId = useSelector(state => state.auth.userId);

    React.useEffect(() => {
        dispatch(favouriteActions.fetchFavourite(userId));
    }, [dispatch, userId]);

    const handleAddToCart = React.useCallback((obj) => {
        dispatch(cartActions.addToCart(obj));
    }, [dispatch]);

    const handleRemoveItemFromFavourite = (prodId, usId) => {
        dispatch(favouriteActions.removeItemFromFavourite(prodId, usId))
    }

    const favouriteItems = useSelector(state => {
        const transformedItems = [];
        for (const key in state.favourite.items) {
            transformedItems.push({
                _id: key,
                title: state.favourite.items[key].title,
                imageUrl: state.favourite.items[key].imageUrl,
                price: state.favourite.items[key].price,
                quantity: state.favourite.items[key].quantity,
                total: state.favourite.items[key].total,
                category: state.favourite.items[key].category,
            })
        }
        return transformedItems;
    })

    const productSelectedHandler = (productTitle, productId) => {
        const URL = `/product/${productTitle}`;
        history.push({ pathname: URL, id: productId });
    }

    return (
        <>
            <Header onSearchProduct={null} />
            <div className="page-body">
                <div className="container">
                    <h1>Favourite</h1>
                    {favouriteItems.length !== 0 ? (
                        <div className="row">
                            <div className="page-content">
                                <div className="catalog row">
                                    {favouriteItems.map((product, index) => (<Products
                                        key={product._id}
                                        {...product}
                                        // linkAddress={`/product/${product._id}`}
                                        linkAddress={() => productSelectedHandler(product.title, product._id)}
                                        category={product.category}
                                        addToCart={handleAddToCart}
                                        addToFavourite={handleRemoveItemFromFavourite}
                                    />))
                                    }
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    ) : <div className="row">   <div className="basket-page">
                        <h2>Empty favourite <icon>😕</icon></h2>
                        <p>
                            Your favourite is empty.<br />
      You can go to catalog page to select some products.
    </p>
                    </div>     </div>}
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Favourite;