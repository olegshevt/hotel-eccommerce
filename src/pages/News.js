import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as newsActions from '../store/actions/news';
import { NewsItem } from '../components/NewsItem';
import { Breadcrumbs } from '../components/Breadcrumbs';
import Spinner from '../components/UI/Spinner/Spinner';
import { useHistory, useLocation } from 'react-router-dom';


export const News = props => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const loading = useSelector(state => state.news.loading);
    const location = useLocation();
    const { location: { id } } = props;
    let history = useHistory();

    React.useEffect(() => {
        dispatch(newsActions.fetchNews());
    }, [dispatch]);

    const newsSelectedHandler = (newsTitle, newsId) => {
        const NEWSURL = `/post/${newsTitle}`;
        history.push({ pathname: NEWSURL, id: newsId });
    }

    return (
        <>
            <Header onSearchProduct={null} />
            <div className="page-body">
                <div className="container">
                    <Breadcrumbs />
                    <h1 className="text-center">News</h1>
                    <div className="row">
                        <div className="page-news">
                            {loading ? <div className="catalog row"><Spinner /></div> : (

                                <div className="catalog row">
                                    {/* {products.map((product) => (<Products */}
                                    {news.map((item) => (
                                        <NewsItem key={item._id}
                                            {...item}
                                            // linkAddress={`/post/${item._id}`}
                                            linkAddress={() => newsSelectedHandler(item.title, item._id)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}