import React from 'react';
import { Link } from 'react-router-dom';
import firstImg from '../public/files/sink_PNG36.png';
import secondImg from '../public/files/screen-1.png';
import thirdImg from '../public/files/soap_PNG36.png';
import forthImg from '../public/files/tapochki_mahrovye-03.png';
import fifthImg from '../public/files/2.png';
import sixImg from '../public/files/mattresse_PNG21105.png';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

export const MainCategories = () => {

    const categories = useSelector(state => state.categories.categories);
    let history = useHistory();
    const catalogSelectedHandler = (categoryTitle, categoryId) => {
        const URL = `/catalog/${categoryTitle}`;
        history.push({ pathname: URL, id: categoryId });
    }

    return (
        <div className="services-box">
            <div className="container">
                <div className="row flex-between">
                    {categories.map((category) => (
                        <div onClick={() => catalogSelectedHandler(category.title, category._id)} className="item-service">

                            {/* <Link to='/catalog/Plumber'></Link> */}
                            <div className="image" style={{ backgroundImage: "url(" + 'http://localhost:3000/' + category.imageUrl + ")" }}
                            ></div>
                            <span className="title"> {category.title}</span>
                        </div>

                    ))}

                    <div className="item-service">
                        <Link to='/catalog'></Link>
                        <span className="title">Open catalog</span>
                    </div>
                </div>
                <Link to='/catalog' className="mob-btn">Open catalog</Link>
            </div>
        </div>
    )
}