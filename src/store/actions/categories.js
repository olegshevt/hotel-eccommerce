import axios from 'axios';
import Category from '../../models/category';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetchCategories = () => {
    return async dispatch => {
        try {
            const response = await axios('http://localhost:3000/api/categories', {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const resData = await response.data.categories;
            const loadedCategories = [];

            for (const key in resData) {
                loadedCategories.push(new Category(
                    resData[key]._id,
                    resData[key].title,
                    resData[key].imageUrl,
                ))
            }
            dispatch({ type: FETCH_CATEGORIES, categories: loadedCategories });

        } catch (error) {
            throw error;
        }
    }
}
