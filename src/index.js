import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCfNGuTK8xoD7vuDcJhnobxv725izoqHG4",
  authDomain: "cart-930d9.firebaseapp.com",
  projectId: "cart-930d9",
  storageBucket: "cart-930d9.appspot.com",
  messagingSenderId: "261474704893",
  appId: "1:261474704893:web:9d0d35501b98d48dc24d94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


