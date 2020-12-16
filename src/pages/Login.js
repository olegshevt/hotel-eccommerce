import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../store/actions/auth';
import { Redirect } from 'react-router-dom';

export const Login = () => {
    const [signInEmail, setSignInEmail] = React.useState('');
    const [signInPassword, setSignInPassword] = React.useState('');

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    if (token) {
        return <Redirect to="/account" />
    }

    const handleSignIn = async () => {
        await dispatch(authActions.signIn(signInEmail, signInPassword));
    }
    return (
        <>
            <Header onSearchProduct={null} />
            <div id="modal-login" class="modal mfp-hide">
                <div class="modal-ttl">Login</div>
                <div>
                    <div class="row align-center">
                        <input type="text" value={signInEmail} onChange={e => setSignInEmail(e.target.value)} placeholder="Email" />
                        <input type="password" value={signInPassword} onChange={e => setSignInPassword(e.target.value)} placeholder="Password" />
                        <button onClick={handleSignIn} class="bt">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}