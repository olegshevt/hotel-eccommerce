import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {

    return (
        <nav class="cabinet-widget-menu">
            <ul>
                <Link to="/account"><li class="active">My account</li></Link>
                <Link to="/profile"> <li>Profile</li></Link>
                <Link to="/orders">  <li>Order history</li></Link>
                <Link to="/cart"><li>Shopping Cart</li></Link>
                <Link to="/logout"> <li>Log out</li></Link>
            </ul>
        </nav>
    )
}