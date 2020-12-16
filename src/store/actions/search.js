import axios from 'axios';
import Product from '../../models/product';

export const FETCH_SEARCH = 'FETCH_SEARCH';

export const fetchSearch = (title) => {
    return async dispatch => {
        try {
            const response = await axios({ method: 'post', url: 'http://localhost:3000/api/search', data: { title } });
            const resData = await response.data.products;
            console.log(resData, 'RESO D')
            const loadedSearch = [];
            for (const key in resData) {
                loadedSearch.push(new Product(
                    resData[key]._id,
                    resData[key].title,
                    resData[key].imageUrl,
                    resData[key].description,
                    resData[key].price,
                    resData[key].categoryId,
                ))
            }
            console.log(loadedSearch, 'LOAD PROD')

            dispatch({ type: FETCH_SEARCH, search: loadedSearch });
        } catch (error) {
            throw error;
        }
    }
}