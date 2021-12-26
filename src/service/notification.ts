import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyATpNlHaTt4vfc4_Q7Pajy32peelvlt4jk",
  authDomain: "quizapp-3ad78.firebaseapp.com",
  projectId: "quizapp-3ad78",
  storageBucket: "quizapp-3ad78.appspot.com",
  messagingSenderId: "114957850427",
  appId: "1:114957850427:web:124f59da4dbdac6115c91e"
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

export function Notification(){
    getToken(messaging, { vapidKey: 'BHKYo_LM2thNIbikBbUfirBt2ijqKIWRhy74EDDAlNNhIpcEZyyRASCaj8V2Pr_BZADg4dsdggRJ-JrtrG_Jsa4' }).then((currentToken) => {
    if (currentToken) {
        console.log("token = ",currentToken);
    } else {
        console.log('No registration token available. Request permission to generate one.');
    }
    }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    });
}