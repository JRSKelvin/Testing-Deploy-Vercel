import React from 'react'
import mainLogo from '../pictures/Glints K-6-logos_black.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Forget2 } from './login/forget'

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
                    <input type="text" placeholder="Answer Question Recovery (What Is Your Hobby)" id="answer" />
                    <button type="submit" onClick={Forget2}>Reset Password</button>
                    <a href="/">Back to Sign In?</a>
                </form>
            </div>
        </div>
    )
}

export default forgetPasswordComponent
