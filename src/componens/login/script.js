const signUpBtn = document.getElementById("signUp");
const loginBtn = document.getElementById("login");
const container = document.getElementById("container");

if(signUpBtn){
    signUpBtn.addEventListener("click", () => {
        container.classList.add("active");
    });
}

if(loginBtn){
    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });
}
