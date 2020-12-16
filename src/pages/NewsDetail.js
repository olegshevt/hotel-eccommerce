import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as newsItemActions from '../store/actions/news_item';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useLocation } from 'react-router-dom';

export const NewsDetail = props => {
    // const params = useParams();
    // const id = params.id;
    const location = useLocation();
    const { location: { id } } = props;

    const dispatch = useDispatch();
    const news = useSelector(state => state.news_item.news);
    // console.log(news, 'NEWS DATAAAA')

    React.useEffect(() => {
        if (id) {
            return dispatch(newsItemActions.fetchNewsItem(id));
        }
    }, [dispatch, id]);

    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <Breadcrumbs />
                    <h1>{news.title}</h1>
                    <span>{news.date}</span>
                    <div class="about-box">
                        <div class="about-box--left">
                            <article>
                                {news.description}
                            </article>
                        </div>
                        <div class="about-box--right">
                            <div class="slider-gallery">
                                <div class="list">
                                    <div class="item"><img src={`http://localhost:3000/${news.imageUrl}`} alt={news.title} /></div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}