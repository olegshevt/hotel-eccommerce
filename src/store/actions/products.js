import axios from 'axios';
import Product from '../../models/product';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = (categoryId, sortBy) => {
    return async dispatch => {
        try {
            const response = await axios({ method: 'post', url: 'http://localhost:3000/api/products', data: { categoryId, sortBy } });
            const resData = await response.data.products;
            console.log(resData, 'RESO D')
            const loadedProducts = [];
            for (const key in resData) {
                loadedProducts.push(new Product(
                    resData[key]._id,
                    resData[key].title,
                    resData[key].imageUrl,
                    resData[key].description,
                    resData[key].price,
                    resData[key].categoryId,
                ))
            }
            console.log(loadedProducts, 'LOAD PROD')

            dispatch({ type: FETCH_PRODUCTS, products: loadedProducts });
        } catch (error) {
            throw error;
        }
    }
}
