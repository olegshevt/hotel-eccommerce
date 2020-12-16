import axios from 'axios';
import User from '../../models/user';

export const EDIT_USER = 'EDIT_USER';
export const FETCH_USER = 'FETCH_USER';

// export const editUser = (userId, name, lastname, email, password) => {
export const editUser = (user) => {
    // console.log(userId, name, lastname, email, password, 'MASS DATA')
    return async dispatch => {
        const response = await fetch(
            'http://localhost:3000/api/edit-user',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user
                    // userId, name, lastname, email, password
                })
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const resData = await response.json();
        dispatch({
            type: EDIT_USER,
            userData: resData
        });
    };
};

export const fetchUser = (id) => {
    // console.log(id, 'MYid')
    return async dispatch => {
        const response = await axios(`http://localhost:3000/api/user/${id}`, {
            // method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const resData = await response.data.user;
        // const loadedUser = [];

        // for (const key in resData) {
        //     loadedUser.push(new User(
        //         resData[key]._id,
        //         resData[key].name,
        //         resData[key].lastname,
        //         resData[key].email,
        //         resData[key].password,
        //     ))
        // }

        dispatch({ type: FETCH_USER, user: resData });
    }
}