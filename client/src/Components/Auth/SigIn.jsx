import React, {  useState } from 'react'
import image from './image.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function SigIn() {
    const [redirect, setRedirect] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                localStorage.setItem('email', user.email);
                setRedirect(true)
                // ...
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                    <div className="col">

                        <h1 className="text-center">Sign In to Cut.It 🔐</h1>
                        <br />
                        <form>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button className="btn btn-primary" onClick={submit}>Login</button>
                        </form>
                    </div>
                    {redirect && <div class="alert alert-primary my-3" role="alert">
                        User loggedIn Successfully,Please wait while we redirect you to the login page
                    </div> && <Navigate to="/dashboard" />}
                </div>

            </div>

        </>
    )
}
