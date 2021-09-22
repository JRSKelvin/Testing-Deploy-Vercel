import React from 'react'
import mainLogo from '../pictures/Glints K-6-logos_black.png'
import './login/script.js'

const loginRegisterComponent = () => {
    return (
        <div>
            <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.8.1/css/all.css" />
            <div className="container" id="container">
                {/* <!-- Main Start --> */}
                <div className="formContainer signUp">
                    <form action="#" onsubmit="return false">
                        <h1>Sign Up</h1>
                        <div className="socialMedia">
                        <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        Or use email
                        <input type="text" placeholder="Name" id="nameSignup" />
                        <input type="email" placeholder="Email" id="emailSignup" />
                        <input type="password" placeholder="Password" id="passSignup" />
                        <div id="radio-button">
                        <input type="radio" name="role" id="admin" value="admin" checked="checked" />
                        <label for="admin">Admin</label>

                        <input type="radio" name="role" id="user" value="user" />
                        <label for="user">User</label>
                        </div>

                        <button type="submit" onclick="Signup()">Sign Up</button>
                    </form>
                </div>

                <div className="formContainer login">
                    <form action="#" id="loginForm" onsubmit="return false">
                        <h1>Login</h1>

                        <div className="socialMedia">
                        <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>Or use your account </span>
                        <input type="email" placeholder="Email" id="email" />
                        <input type="password" placeholder="Password" id="pass" />
                        <a href="./forgetpassword">Forgot your password?</a>

                        <button type="submit" onclick="Login()">Login</button>
                    </form>
                </div>
                {/* <!-- Main End --> */}

                {/* <!-- Slider Start --> */}
                <div className="slider">
                    <div className="sliders">
                        <div className="sliderContainer sliderL">
                        <img src={mainLogo} alt="" />

                        <h1>Welcome Back!</h1>
                        <p>Silahkan login kalau sudah punya akun</p>
                        <button className="sliderBtn" id="login" onClick={loginBtn}>Login</button>
                        </div>
                        <div className="sliderContainer sliderR">
                        <img src={mainLogo} alt="" />
                        <h1>Sign up</h1>
                        <p>Daftarkan dirimu kalau belum punya akun</p>
                        <button className="sliderBtn" id="signUp" onClick={signUpBtn}>Sign Up</button>
                        </div>
                    </div>
                </div>
                {/* <!-- Slider End --> */}
            </div>
        </div>
    )
}

function signUpBtn() {
    const container = document.getElementById("container");
    container.classList.add("active");
}
function loginBtn() {
    const container = document.getElementById("container");
    container.classList.remove("active");
}

export default loginRegisterComponent
