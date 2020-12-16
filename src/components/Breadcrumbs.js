import React from 'react';
import { Link, Route, Router, useParams, useRouteMatch } from 'react-router-dom';
import Catalog from '../pages/Catalog';

export const Breadcrumbs = () => {

    const params = useParams();
    const id = params.id;
    let match = useRouteMatch();

    const routes = [
        {
            path: '/',
            exact: true,
            main: () => <p>Home</p>
        },
        {
            path: '/catalog',
            main: () => <p>Catalog</p>
        },
        {
            path: '/product/:id',
            main: () => <p>Product</p>
        },
        {
            path: '/news',
            main: () => <p>News</p>
        },
        {
            path: '/post/:id',
            main: () => <p>News Item</p>
        },
        {
            path: '/about',
            main: () => <p>About</p>
        },
        {
            path: '/contacts',
            main: () => <p>Contacts</p>
        },

    ]

    const switchPath = () => {

        if (match.url === '/news' || match.path === '/post/:id') {
            return (
                <>
                    <li><Link to='/news'>News</Link></li>
                    {id === undefined ? '' : (
                        <li><Link to={`/post/${id}`}>{id}</Link></li>
                    )}
                </>
            )
        }
        else if (match.url === '/catalog' || match.path === '/product/:id' || match.path === '/catalog/:id') {
            return (
                <>
                    <li><Link to='/catalog'>Catalog</Link></li>
                    {id === undefined ? '' : (
                        <li><Link to={`/product/${id}`}>{id}</Link></li>

                    )}
                </>
            )
        }
        else if (match.path === '/catalog/:id') {
            return (
                <>
                    {id === undefined ? '' : (
                        <li><Link to={`/catalog/${id}`}>{id}</Link></li>

                    )}
                </>
            )


        }
        else if (match.url === '/about') {
            return <li><Link to='/about'>About</Link></li>
        }
        else if (match.url === '/contacts') {
            return <li><Link to='/contacts'>Contacts</Link></li>
        }
        else if (match.url === '/delivery') {
            return <li><Link to='/delivery'>Delivery</Link></li>
        }
    }


    return (
        <div className="breadcrumbs">

            <ul className="row">
                <li><Link to='/'>Home</Link></li>
                {switchPath()}
            </ul>

            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                />
            )
            )}


        </div>
    )
}