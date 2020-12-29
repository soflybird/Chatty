import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDhUA4ZzJx07TAvVK8sobY8-6xsw11OfJo",
    authDomain: "chatty-1d414.firebaseapp.com",
    databaseURL: "https://chatty-1d414-default-rtdb.firebaseio.com/"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();