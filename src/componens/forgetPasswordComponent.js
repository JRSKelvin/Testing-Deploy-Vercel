import React from 'react'
import mainLogo from '../pictures/Glints K-6-logos_black.png'
import axios from 'axios'

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
                    <input type="text" placeholder="Answer Question Recovery" id="answer" />
                    <button type="submit" onClick={Forget}>Reset Password</button>
                    <a href="/">Back to Sign In?</a>
                </form>
            </div>
        </div>
    )
}

function Forget() {
  if (Forget) {
    let emailInput = document.getElementById("email").value;
    let passInput = document.getElementById("pass").value;
    let answerInput = document.getElementById("answer").value;

    axios.get(
        "https://613618d38700c50017ef53e3.mockapi.io/UserAdmin"
      )
      .then((response) => {
        console.log(response.data);
        const myData = response.data;
        let user = myData.filter((item) => item.email === emailInput);
        
        console.log(user);
        if (user.length > 0) {
          if (user[0].email === emailInput) {
            if (user[0].answerrecovery === answerInput){
              if (passInput === "" || passInput === null) {
                alert("Harap memasukkan password");
                return false;
              } else {
                if (passInput.length < 6) {
                  alert("Password minimal 6 karakter");
                  document.getElementById("pass").value = "";
                  return false;
                }
              }
              const getUserID = user[0].id;
              const changePassword = { password: passInput };
              console.log(getUserID, changePassword);

              axios.put(
                "https://613618d38700c50017ef53e3.mockapi.io/UserAdmin/" +
                  getUserID,
                changePassword
              );

              user[0].password = passInput;
              alert("Password Berhasil Diganti, Silahkan Login Kembali");
              console.clear();
              window.location.href ="/"
            }else {
              alert("Email Tidak Ditemukan Atau Jawaban Recovery Salah");
              console.clear();
            }
          }
        } else {
          alert("Email Tidak Ditemukan Atau Jawaban Recovery Salah");
          console.clear();
        }
      })
      


    // fetch("https://613618d38700c50017ef53e3.mockapi.io/UserAdmin")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     let user = result.filter((item) => item.email === emailInput);
    //     console.log(user);
    //     if (user.length > 0) {
    //       if (user[0].email === emailInput) {
    //         if (passInput === "" || passInput === null) {
    //           alert("Harap memasukkan password");
    //           return false;
    //         } else {
    //           if (passInput.length < 6) {
    //             alert("Password minimal 6 karakter");
    //             document.getElementById("pass").value = "";
    //             return false;
    //           }
    //         }
    //         const getUserID = user[0].id;
    //         const changePassword = { password: passInput };
    //         console.log(getUserID, changePassword);

    //         axios.put(
    //           "https://613618d38700c50017ef53e3.mockapi.io/UserAdmin/" +
    //             getUserID,
    //           changePassword
    //         );

    //         user[0].password = passInput;
    //         alert("Password Sudah Diganti");
    //         //console.clear();
    //       }
    //     } else {
    //       alert("Email tidak ditemukan");
    //     }
    //   });
  }
}


export default forgetPasswordComponent
