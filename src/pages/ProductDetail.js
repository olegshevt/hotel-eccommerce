import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../store/actions/product';
import * as cartActions from '../store/actions/cart';

export const ProductDetail = props => {
    // const params = useParams();
    // const id = params.id;
    const location = useLocation();
    const { location: { id } } = props;

    const userId = useSelector(state => state.auth.userId);

    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product);

    React.useEffect(() => {
        if (id) {
            return dispatch(productActions.fetchProduct(id));
        }
    }, [dispatch, id]);

    const handleAddToCart = React.useCallback((dataUser, dataProduct) => {
        dispatch(cartActions.addToCart(dataUser, dataProduct));
    }, [dispatch]);

    return (
        <>
            <Header onSearchProduct={null} />
            <div className="page-body">
                <div className="container">
                    <Breadcrumbs />
                    <div className="product-details">
                        <div className="product-details--left">
                            <h1>{product.title}</h1>

                            <div className="info">
                                <div className="price">
                                    {product.price} <span className="rub"></span>
                                </div>
                                <div className="weight">
                                    <span>{product.category}</span>
                                </div>
                            </div>
                            <span onClick={() => handleAddToCart(product._id, userId)} className="bt">Add to cart</span>
                            <div className="desription">
                                {product.description}				</div>
                        </div>
                        <div className="product-details--right">
                            <div className="product-gallery">
                                <div className="item"><img className="itemImage" src={`http://localhost:3000/${product.imageUrl}`} alt={product.title} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}