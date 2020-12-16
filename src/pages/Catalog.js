import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CatalogSort } from '../components/CatalogSort';
import { CategoriesMenu } from '../components/CategoriesMenu';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from '../components/Products';
import Spinner from '../components/UI/Spinner/Spinner';
import * as productsActions from '../store/actions/products';
import * as cartActions from '../store/actions/cart';
import * as favouriteActions from '../store/actions/favourite';
import * as categoriesActions from '../store/actions/categories';
import * as searchActions from '../store/actions/search';

const Catalog = props => {
    const [sortBy, setSortBy] = React.useState('');
    // let { id } = useParams();

    const location = useLocation();
    const { location: { id } } = props;

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const loading = useSelector(state => state.products.loading);
    const categories = useSelector(state => state.categories.categories);
    let history = useHistory();

    React.useEffect(() => {
        dispatch(productsActions.fetchProducts(id, sortBy));
    }, [dispatch, id, sortBy]);

    React.useEffect(() => {
        dispatch(categoriesActions.fetchCategories());
    }, [dispatch]);

    const handleAddToCart = React.useCallback((userId, productId) => {
        dispatch(cartActions.addToCart(userId, productId));
    }, [dispatch]);

    const handleAddToFavourite = React.useCallback((userId, productId) => {
        dispatch(favouriteActions.addToFavourite(userId, productId));
    }, [dispatch]);

    const handleSelectedSort = (text) => {
        setSortBy(text);
    };

    const handleSearch = React.useCallback((childDataSecond) => {
        dispatch(searchActions.fetchSearch(childDataSecond));
        history.push('/search')
    }, [dispatch]);

    const productSelectedHandler = (productTitle, productId) => {
        const URL = `/product/${productTitle}`;
        history.push({ pathname: URL, id: productId });
    }

    return (
        <>
            <Header />
            <div className="page-body">
                <div className="container">
                    <Breadcrumbs />
                    <h1 className="text-center">Catalog</h1>
                    <div className="row">
                        <CategoriesMenu categories={categories} />
                        <div className="page-content">
                            <CatalogSort selectedType={handleSelectedSort} />
                            {loading ? <div className="catalog row"><Spinner /></div> : (
                                <div className="catalog row">
                                    {products.map((product) => (<Products
                                        key={product._id}
                                        {...product}
                                        category={product.category.title}
                                        // linkAddress={`/product/${product._id}`}
                                        linkAddress={() => productSelectedHandler(product.title, product._id)}
                                        addToCart={handleAddToCart}
                                        addToFavourite={handleAddToFavourite}
                                    />))
                                    }
                                </div>
                            )}
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default Catalog;