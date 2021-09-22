import React, { Component } from 'react'
import ForgetPassword from './componens/login/forget'
import LoginRegister from './componens/login/index'
import {BrowserRouter, BrowserRouter as Router, Route,} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={LoginRegister} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />
        </BrowserRouter>
        {/* <ForgetPassword /> */}
        {/* <LoginRegister /> */}
      </div>
    )
  }
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
