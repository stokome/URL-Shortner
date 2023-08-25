import './App.css';
import SigIn from './Components/Auth/SigIn';
import Signup from './Components/Auth/Signup';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBrBj-cEfEfOxVZ30gJHfx0pbKsJ90sAWI",
    authDomain: "urlshortner-cedfa.firebaseapp.com",
    projectId: "urlshortner-cedfa",
    storageBucket: "urlshortner-cedfa.appspot.com",
    messagingSenderId: "778150287941",
    appId: "1:778150287941:web:9f146583feea4c0c9a212c"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/dashboard" element={<UserInput/>} /> 
        {/* <Route path="/dashboard" element={<Protected Component={UserInput} />} /> */}
        <Route path="/signin" element={<SigIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
