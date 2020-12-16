import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../store/actions/auth';
import { Redirect } from 'react-router-dom';

export const Logout = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(authActions.logOut());
    }, [dispatch]);

    return <Redirect to="/" />;

}