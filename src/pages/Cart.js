import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import * as cartActions from '../store/actions/cart';
import * as ordersActions from '../store/actions/orders';
import Spinner from '../components/UI/Spinner/Spinner'


export const Cart = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const loading = useSelector(state => state.cart.loading);


    React.useEffect(() => {
        dispatch(cartActions.fetchCart(userId));
    }, [dispatch, userId]);

    const handleRemoveFromCart = React.useCallback(() => {
        dispatch(cartActions.clearCart(userId));
    }, [dispatch, userId]);

    const handleRemoveItemFromCart = (prodId, usId) => {
        dispatch(cartActions.removeItemFromCart(prodId, usId))
    }

    const handlePlusCartItem = (prodId, usId) => {
        dispatch(cartActions.plusCartItem(prodId, usId));
    }

    const handleMinusCartItem = (prodId, usId) => {
        dispatch(cartActions.minusCartItem(prodId, usId));
    }
    const cart = useSelector(state => state.cart.items);

    // console.log(cart, 'CARTE')
    const total = useSelector(state => state.cart.totalPrice);

    const cartItems = useSelector(state => {
        const transformedItems = [];
        for (const key in state.cart.items) {
            transformedItems.push({
                _id: key,
                title: state.cart.items[key].title,
                imageUrl: state.cart.items[key].imageUrl,
                price: state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                total: state.cart.items[key].total,
                category: state.cart.items[key].category,
            })
        }
        return transformedItems;
    })
    console.log(cart, 'CARTE 2')


    const handlePlaceOrder = async () => {
        await dispatch(ordersActions.addOrder(cartItems, total, userId));
        handleRemoveFromCart();
    }

    const totalPrice = useSelector(state => state.cart.totalPrice);

    return (
        <>
            <Header onSearchProduct={null} />
            <div className="page-body">

                <div className="container">
                    <h1>Shopping cart</h1>
                    {total ? (
                        <div className="basket-page">
                            <div className="basket-table">
                                <div className="basket-table--head">
                                    <div className="cell">Фото</div>
                                    <div className="cell">Название</div>
                                    <div className="cell">Цена</div>
                                    <div className="cell">Количество</div>
                                    <div className="cell">Сумма</div>
                                </div>
                                <div className="basket-table--body">

                                    {cartItems && cartItems.map((item, index) => (

                                        <div key={index} className="basket-table--section">
                                            <div className="cell photo">
                                                <img src={`http://localhost:3000/${item.imageUrl}`} alt="" />
                                            </div>
                                            <div key={index} className="cell">
                                                <div className="title">{item.title}</div>
                                                <div className="category">{item.category}</div>
                                            </div>
                                            <div className="cell">
                                                <div className="mob-subhead">Цена</div>
                                                <span className="price">{item.price} руб.</span>
                                            </div>
                                            <div className="cell">
                                                <div className="mob-subhead">Количество</div>
                                                <div className="form-amount">
                                                    <span onClick={() => handleMinusCartItem(cart[item._id]._id, userId)} className="minus"></span>
                                                    {/* <p>{cart[item._id].quantity}</p> */}
                                                    <p>{item.quantity}</p>
                                                    <span onClick={() => handlePlusCartItem(cart[item._id]._id, userId)} className="plus"></span>
                                                </div>
                                            </div>
                                            <div className="cell">
                                                <div className="mob-subhead">Сумма</div>
                                                {/* <span className="price">{cart[item._id].total} руб.</span> */}
                                                <span className="price">{item.total} руб.</span>

                                            </div>
                                            <span onClick={() => handleRemoveItemFromCart(item._id, userId)} className="delete"></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="basket-panel">
                                <Link to="/confirmation">  <span displayorder={cartItems} onClick={handlePlaceOrder} className="bt">Place order</span></Link>
                                <div className="sum-total">
                                    Total: <span className="val">{totalPrice} <span className="rub"></span> </span>
                                </div>
                                <div className="clear-cart">
                                    <span onClick={handleRemoveFromCart}>Clear cart</span>
                                </div>
                            </div>

                        </div>
                    ) : (
                            <div className="basket-page">
                                <h2>Empty cart <icon>😕</icon></h2>
                                <p>
                                    Your cart is empty.<br />
                  You can go to catalog page to select some products.
                </p>
                            </div>)}
                </div>

            </div>
            <Footer />
        </>
    )
}