import firebase from 'firebase';

var index = {
    apiKey: "AIzaSyA9jWvPEawYAi2BvmWXRw5wvExjhhKPl00",
    authDomain: "kitchen-26241.firebaseapp.com",
    databaseURL: "https://kitchen-26241.firebaseio.com",
    projectId: "kitchen-26241",
    storageBucket: "kitchen-26241.appspot.com",
    messagingSenderId: "874962476656"
};

const fbase = firebase.initializeApp(index);
export default fbase;


