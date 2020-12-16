import React from 'react';
import { Link, } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

export const CategoriesMenu = ({ categories }) => {

    let history = useHistory();
    const categorySelectedHandler = (categoryTitle, categoryId) => {
        const URL = `/catalog/${categoryTitle}`;
        history.push({ pathname: URL, id: categoryId });
    }

    return (
        <div className="page-sidebar">
            <div className="widget-menu">
                <div className="title">Categories</div>
                <nav>
                    <ul>
                        {categories.map((category, index) => (
                            <li onClick={() => categorySelectedHandler(category.title, category._id)} key={category._id}>{category.title}</li>

                            // <Link to={`/catalog/${category._id}`}>
                            //     <li key={category._id}>{category.title}</li>
                            // </Link>
                        ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}