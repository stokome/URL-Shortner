import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import image from './image.png'

export default function Signup() {
    //const [redirect, setRedirect] = useState(false)
    const [email, setEmail] = useState('')
    const [SignupStatus, setSignupStatus] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const submit = (e) => {
        e.preventDefault()
        if (password !== confirmpassword) {
            alert("Passwords do not match,Please try again")
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.localStorage.setItem('email', user.email);
                console.log(user.email)
                setSignupStatus(true)
                alert("User Signed-Up Successfully,Please wait while we redirect you to the login page")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                alert(errorMessage)
                // ..
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

                        <h1 className="text-center">Register to Cut.It 📝</h1>
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

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"> Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>

                            <button className="btn btn-primary" onClick={submit}>Register</button>
                        </form>

                        {SignupStatus && <div class="alert alert-primary my-3" role="alert">
                            User Signed-Up Successfully,Please wait while we redirect you to the login page
                        </div> && <Navigate to="/dashboard" /> }

                    </div>

                </div>

            </div>

        </>
    )
}
