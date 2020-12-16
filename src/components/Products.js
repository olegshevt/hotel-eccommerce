import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Products = ({
    _id,
    title,
    price,
    category,
    imageUrl,
    linkAddress,
    addToCart,
    addToFavourite
}) => {

    const userId = useSelector(state => state.auth.userId);

    const addProduct = () => {
        addToCart(_id, userId)
    }

    const addFavourite = () => {
        addToFavourite(_id, userId);
    }

    return (
        <>
            <div className="catalog-item">
                <div className="tools">
                    <span onClick={addProduct} className="to-card"></span>
                    <ion-icon onClick={addFavourite} class="fast-view icon-favorite" name="heart"></ion-icon>
                </div>
                <span onClick={linkAddress} className="photo"><img src={`http://localhost:3000/${imageUrl}`} alt={title} /></span>

                <div className="title">
                    <p onClick={linkAddress}>{title}</p>
                </div>

                <div className="category">{category ? category : ''}</div>
                <div className="price">
                    {price} <span className="rub"></span>
                </div>
            </div>
        </>
    )
}