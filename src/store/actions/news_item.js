import axios from 'axios';
import News from '../../models/news';
export const FETCH_NEWS_ITEM = 'FETCH_NEWS_ITEM';

export const fetchNewsItem = (id) => {
    return async dispatch => {
        const response = await axios({ method: 'post', url: `http://localhost:3000/api/news/${id}` });
        const resData = await response.data.newsItem;

        const news = new News(
            resData._id,
            resData.title,
            resData.date,
            resData.imageUrl,
            resData.description,
        )
        dispatch({ type: FETCH_NEWS_ITEM, item: news });
    }
}