export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const signUp = (name, email, password) => {
    return async dispatch => {
        const response = await fetch(
            'http://localhost:3000/api/signup',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, password
                })
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const resData = await response.json();
        dispatch({
            type: SIGN_UP,
            user: resData
        });
    };
};

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('userId');
    return { type: LOG_OUT };
};

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
            console.log('EXPI ERROR')
        }, expirationTime);
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'http://localhost:3000/api/signin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const resData = await response.json();
        const expirationDate = new Date(new Date().getTime() + resData.expiresIn);
        localStorage.setItem('token', resData.token);
        localStorage.setItem('expiresIn', resData.expiresIn);
        localStorage.setItem('userId', resData.userId);
        // console.log(resData, 'RES DATA')
        dispatch({
            type: SIGN_IN,
            user: resData
        });
        dispatch(checkAuthTimeout(resData.expiresIn));
    };
};

export const loginSuccess = (token, userId) => {
    return {
        type: LOGIN_SUCCESS,
        token: token,
        userId: userId
    };
};

export const checkIfSignIn = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logOut());
        } else {
            // const expiresIn = new Date(localStorage.getItem('expiresIn'));
            const expiresIn = localStorage.getItem('expiresIn');

            //ERROR WITH DATE
            console.log(expiresIn, 'GET TIME')
            if (expiresIn <= 0) {
                dispatch(logOut());
                console.log(expiresIn, 'DA YA TYT')
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(loginSuccess(token, userId));
                dispatch(checkAuthTimeout(expiresIn));
            }
        }
    }
}