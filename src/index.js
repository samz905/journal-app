import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyBw-XY4MdsgegCFs_VxtQ1euJRJ13EYnAY",
  authDomain: "notes-app-83819.firebaseapp.com",
  projectId: "notes-app-83819",
  storageBucket: "notes-app-83819.appspot.com",
  messagingSenderId: "744574750335",
  appId: "1:744574750335:web:f6e288f5e45282dcccb94a",
  measurementId: "G-CV8BH4DLGT"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
