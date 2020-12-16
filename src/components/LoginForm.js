import React from 'react';

export const LoginForm = () => {
    return (
        <div id="modal-login" class="modal mfp-hide">
            <div class="modal-ttl">Login</div>
            <div>
                <div class="row align-center">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button class="bt">Login</button>
                </div>
            </div>
        </div>
    )
}