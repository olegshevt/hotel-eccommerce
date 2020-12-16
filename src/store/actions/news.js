import axios from 'axios';
import News from "../../models/news";
export const FETCH_NEWS = 'FETCH_NEWS';

export const fetchNews = () => {
    return async dispatch => {
        try {
            const response = await axios({ method: 'get', url: 'http://localhost:3000/api/news' });
            const resData = await response.data.news;
            const loadedNews = [];

            for (const key in resData) {
                loadedNews.push(new News(
                    resData[key]._id,
                    resData[key].title,
                    resData[key].date,
                    resData[key].imageUrl,
                    resData[key].description,
                ))
            }
            // console.log(loadedNews, 'LOAD NEWS')
            dispatch({ type: FETCH_NEWS, items: loadedNews });
        } catch (error) {
            throw error;
        }
    }
}