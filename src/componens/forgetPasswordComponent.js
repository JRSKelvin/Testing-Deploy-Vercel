import React from 'react'
import mainLogo from '../pictures/Glints K-6-logos_black.png'

const forgetPasswordComponent = () => {
    return (
        <div className="containerForget">
            <div className="formContainer-Forget">
                <form action="#" onsubmit="return false">
                    <img src={mainLogo} alt="" />
                    <h1>Forget Password</h1>
                    Type your email and new password here!
                    <input type="email" placeholder="Email" id="email" style={{marginTop:'25px'}} />
                    <input type="password" placeholder="New Password" id="pass" />
                    <button type="submit" onclick="Forget()">Reset Password</button>
                    <a href="/">Back to Sign In?</a>
                </form>
            </div>
        </div>
    )
}

export default forgetPasswordComponent
