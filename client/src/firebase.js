// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrBj-cEfEfOxVZ30gJHfx0pbKsJ90sAWI",
    authDomain: "urlshortner-cedfa.firebaseapp.com",
    projectId: "urlshortner-cedfa",
    storageBucket: "urlshortner-cedfa.appspot.com",
    messagingSenderId: "778150287941",
    appId: "1:778150287941:web:9f146583feea4c0c9a212c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
