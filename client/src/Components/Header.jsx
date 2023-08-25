import React, { useEffect, useState } from 'react'
import www from '../assets/www.png'
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
export default function Header() {
    const [loginStatus, setLoginStatus] = useState(false)
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //const uid = user.uid;
                setLoginStatus(true)
            } else {
                // User is signed out
                // ...
            }
        });
    })
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('logout')
            localStorage.removeItem('email')
            setLoginStatus(false)

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand px-3" >
                        <img src={www} alt="Logo" width="30" height="24" className="d-inline-block align-text-top px-1" />
                        Cut.It
                    </Link>
                    <div className="d-flex">
                        <Link to="/signin">
                            {!loginStatus && <button type="button" className="btn btn-primary mx-2"  >Login</button>}
                        </Link>
                        <Link to="/signup">
                            {!loginStatus && <button type="button" className="btn btn-danger mx-2">SignUp</button>}
                        </Link>
                        <Link to="/">
                            {loginStatus && < button type="button" className="btn btn-danger mx-2" onClick={logout}>Logout</button>}
                        </Link>
                    </div>

                </div>

            </nav>

        </div>
    )
}
