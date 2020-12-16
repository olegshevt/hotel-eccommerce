import React from 'react';
import { Link } from 'react-router-dom';

export const TopMenu = () => {

    return (
        <nav className="nav">
            <div class="mob-bar">
                <a href="#modal-login" class="profile magnificPopup">Профиль </a>
                <a href="" class="subs">Подписки </a>
            </div>
            <ul className="row">
                <li> <Link className="active" to={'/about'}>   About </Link></li>
                <li> <Link to={'/catalog'}>   Catalog </Link></li>
                <li> <Link to={'/delivery'}>   Delivery </Link></li>
                <li> <Link to={'/contacts'}>   Contacts </Link></li>
            </ul>
        </nav>

    )
}