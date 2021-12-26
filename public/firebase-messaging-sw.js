importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyATpNlHaTt4vfc4_Q7Pajy32peelvlt4jk",
    authDomain: "quizapp-3ad78.firebaseapp.com",
    projectId: "quizapp-3ad78",
    storageBucket: "quizapp-3ad78.appspot.com",
    messagingSenderId: "114957850427",
    appId: "1:114957850427:web:124f59da4dbdac6115c91e"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.messaging();