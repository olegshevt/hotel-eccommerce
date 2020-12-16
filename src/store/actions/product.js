import axios from 'axios';
import Product from '../../models/product';

export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export const fetchProduct = (id) => {
    return async dispatch => {
        const response = await axios({ method: 'post', url: `http://localhost:3000/api/product/${id}` });
        const resData = await response.data.product;

        const product = new Product(
            resData._id,
            resData.title,
            resData.imageUrl,
            resData.description,
            resData.price,
            resData.categoryId.title,
        )
        dispatch({ type: FETCH_PRODUCT, product: product });
    }
}
