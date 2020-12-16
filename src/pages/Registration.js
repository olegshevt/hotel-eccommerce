import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../store/actions/auth';

export const Registration = () => {
    const [signUpName, setSignUpName] = React.useState('');
    const [signUpEmail, setSignUpEmail] = React.useState('');
    const [signUpPassword, setSignUpPassword] = React.useState('');

    const dispatch = useDispatch();
    const handleSignUp = async () => {
        await dispatch(authActions.signUp(signUpName, signUpEmail, signUpPassword));
    }
    // console.log(signUpEmail)

    return (
        <>
            <Header onSearchProduct={null} />
            <div id="modal-login" class="modal mfp-hide">
                <div class="modal-ttl">Registration</div>
                <div>
                    <div class="row align-center">
                        <input type="text" value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} placeholder="Email" />
                        <input type="text" value={signUpName} onChange={e => setSignUpName(e.target.value)} placeholder="Name" />
                        <input type="password" value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} placeholder="Password" />
                        {/* <input type="password" placeholder="Repeat password" /> */}
                        <button onClick={handleSignUp} class="bt">Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}