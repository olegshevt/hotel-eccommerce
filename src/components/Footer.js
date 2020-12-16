import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Footer = props => {

    const categories = useSelector(state => state.categories.categories);



    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="column">
                        <div className="footer-ttl">Menu</div>
                        <ul>
                            <li> <Link to={'/catalog'}>   Catalog </Link></li>
                            <li> <Link to={'/about'}>   About </Link></li>
                            <li> <Link to={'/delivery'}>   Delivery </Link></li>
                            <li> <Link to={'/contacts'}>   Contacts </Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="footer-ttl">Catalog</div>
                        <ul>
                            {categories.map((category, index) => (<Link key={category._id} to={`/catalog/${category._id}`}><li>{category.title}</li></Link>))}
                        </ul>
                    </div>
                    <div className="column">
                        <div className="footer-ttl">Contacts</div>
                        <div className="item">+7 (499) 499—99—99</div>
                        <div className="item location">
                            Russia, Moscow, First st., 18, office 33
				</div>
                    </div>
                    <div className="column row">
                        <div className="logo">
                            <a href="index.php"><img src="i/logo.png" alt="" /></a>
                        </div>
                        <div className="pull-down">
                            <div className="share">
                                <a href=""><img src="i/insta.svg" alt="" /></a>
                                <a href=""><img src="i/fb.svg" alt="" /></a>
                                <a href=""><img src="i/vk.svg" alt="" /></a>
                            </div>
                            <div className="metrika"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}