 import  firebase from "firebase";
 
const firebaseConfig = {
  apiKey: "AIzaSyBCEkCq1eQ2e3JIjyf4SrRgxW5Mt7hJfTY",
  authDomain: "c100-3b3cc.firebaseapp.com",
  databaseURL: "https://c100-3b3cc-default-rtdb.firebaseio.com",
  projectId: "c100-3b3cc",
  storageBucket: "c100-3b3cc.appspot.com",
  messagingSenderId: "238908987210",
  appId: "1:238908987210:web:302bc377009cbb23fa53b3"
};

//initialize your database
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database()
 