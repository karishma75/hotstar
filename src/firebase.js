import firebase from "firebase";
import "firebase/auth";//auth
import "firebase/database";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDWc1ufkssIuqwTK-TJ4g5WM-VbFBAxp0k",
    authDomain: "hotstar-58527.firebaseapp.com",
    databaseURL: "https://hotstar-58527.firebaseio.com",
    projectId: "hotstar-58527",
    storageBucket: "hotstar-58527.appspot.com",
    messagingSenderId: "55479872314",
    appId: "1:55479872314:web:7bec2e1a6cfbfc77d93e03"
  };
  //initialize firebase and react application
  firebase.initializeApp(firebaseConfig);

  export default firebase;
  