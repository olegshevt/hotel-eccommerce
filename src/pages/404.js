import React from 'react';
import { Link } from 'react-router-dom';


export const Error404 = () => {

    return (
        <div className="error-container">
            <div className="error-item">
                <h1 className="text-center">Page not found</h1>
                <p className="text-center">You can check <Link to="/">our main page</Link>!</p>
            </div>
        </div>
    )

}