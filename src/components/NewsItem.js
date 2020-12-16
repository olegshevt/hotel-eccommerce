import React from 'react';
import { Link } from 'react-router-dom';

export const NewsItem = ({
    title,
    date,
    imageUrl,
    linkAddress,
}) => {

    return (
        <>
            <div className="catalog-item">
                <div className="tools">
                </div>
                <span className="photo" onClick={linkAddress}><img src={`http://localhost:3000/${imageUrl}`} alt={title} /></span>
                <span onClick={linkAddress}>
                    <div className="title">
                        <p>{date}</p>
                    </div>
                </span>
                <div className="category">{title}</div>

            </div>
        </>

    )


}
