import { SIGN_UP } from "../actions/auth";
import { SIGN_IN } from "../actions/auth";
import { LOG_OUT } from "../actions/auth";
import { LOGIN_SUCCESS } from "../actions/auth";

const initialState = {
    user: [],
    token: '',
    userId: '',
    expiresIn: 0
}

// const remainingMilliseconds = 60 * 60 * 100;

// setAutoLogout = milliseconds => {
//     setTimeout(() => {
//         return {
//             ...state,
//             userId: '',
//             token: ''
//         }
//     }, milliseconds);
// };

// logoutHandler = () => {
//     return {
//         ...state,
//         userId: '',
//         token: ''
//     }
// };



export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            console.log(action.user, 'REGISTER-USER');
            return {
                ...state,
                user: action.user
            }
        case SIGN_IN:
            console.log(action.user, 'LOGIN-USER');

            // localStorage.setItem('token', resData.token);
            // localStorage.setItem('userId', resData.userId);

            return {
                ...state,
                userId: action.user.userId,
                token: action.user.token,
                expiresIn: action.user.expiresIn
            }

        case LOG_OUT:
            // console.log(action.user, 'LOGIN-USER');

            return {
                ...state,
                userId: '',
                token: '',
                expiresIn: 0
            }

        case LOGIN_SUCCESS:

            return {
                ...state,
                userId: action.userId,
                token: action.token,
            }
    }
    return state;
}