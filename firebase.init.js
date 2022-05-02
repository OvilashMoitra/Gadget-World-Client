import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDRXwvmNX_xkqHhEgo00SIERQxsU10KjPw",
    authDomain: "gadget-world-7095d.firebaseapp.com",
    projectId: "gadget-world-7095d",
    storageBucket: "gadget-world-7095d.appspot.com",
    messagingSenderId: "382377185152",
    appId: "1:382377185152:web:92787e3e6473bcdc51bb65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;