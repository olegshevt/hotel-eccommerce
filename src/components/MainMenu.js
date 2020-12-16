import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../store/actions/categories';


export const MainMenu = props => {

    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(categoriesActions.fetchCategories());
    }, [dispatch]);

    const openMenu = () => {
        const selectDropDown = document.querySelector(".dropdown");
        selectDropDown.style.display = 'none' ? selectDropDown.style.display = 'block' : ''
    }

    const closeMenu = () => {
        const selectDropDown = document.querySelector(".dropdown");
        selectDropDown.style.display = 'none'
    }

    return (

        <nav className="menu">
            <ul className="row">
                <li onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                    <Link to={`/catalog`}>   Catalog </Link>
                    <div className="dropdown">
                        <ul>
                            {categories.map((category, index) => (<Link key={category._id} to={`/catalog/${category._id}`}><li>{category.title}</li></Link>))}
                        </ul>
                    </div>
                </li>
                <li><Link to={`/news`}> news</Link></li>
            </ul>
        </nav>
    )
}