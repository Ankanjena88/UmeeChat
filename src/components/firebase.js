import firebase from "firebase/app";
import "firebase/auth";


 export const auth=firebase.initializeApp( {
    apiKey: "AIzaSyDNMdP5woalM54-uKjNi3iH99JFop-U878",
    authDomain: "umeechat.firebaseapp.com",
    projectId: "umeechat",
    storageBucket: "umeechat.appspot.com",
    messagingSenderId: "793874601574",
    appId: "1:793874601574:web:2e9c4966496a4e7ef93fa7"
  }).auth();