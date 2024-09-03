// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhbSHJ6NMk2M9x2Q4j7UebxA8qBaMdh0Q",
  authDomain: "firstfire-73d3f.firebaseapp.com",
  projectId: "firstfire-73d3f",
  storageBucket: "firstfire-73d3f.appspot.com",
  messagingSenderId: "105206583528",
  appId: "1:105206583528:web:66118dc99e8ab4342b795d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize firebase authentificate
export const auth = getAuth (app);
export default app
