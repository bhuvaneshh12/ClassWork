import React from 'react';
import logo from'./franky.jpg';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const disp=<div><h1 style={{color:"blue"}}>Superrrrrrrrrrrrrrrrrrr</h1><img src={logo}></img></div>

// const age=15;
// if(age>18)
// {
//   var display="vote";
// }
// else{
//   var display="can't vote";
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); 

//reportWebVitals();
