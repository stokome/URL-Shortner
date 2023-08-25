import React from 'react'
import image from './image.png'

export default function Home() {
    return (
        <>

            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                    <div className="col">

                        <h1 className="text-center">Welcome to Cut.It 🔐</h1>
                        <br />
                        <h3 className="text-center">A URL Shortener</h3>
                        <br />
                        <h5 className="text-center">Key Features of Cut.It</h5>
                        <br />
                        <ul style={{ listStyleType: 'none' }}>
                            <li>👉 Shorten any URL</li>
                            <li>👉 Customize your URL</li>
                            <li>👉 It's Completely Free</li>
                            <li>👉 No Ads</li>
                            <li>👉 No Credit Card Required</li>
                            <li>👉 No Cookies</li>
                            <li>👉 No Javascript</li>
                            <li>👉 No Analytics</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
