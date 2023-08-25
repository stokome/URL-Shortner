import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserInput() {
    const [url, setUrl] = useState('')
    const [email, setEmail] = useState(window.localStorage.getItem('email'))
    const [display, setDisplay] = useState(false)
    const [urls, setUrls] = useState([])
    const [shortUrl, setShortUrl] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        if (window.localStorage.getItem('email') === null) {
            navigate('/signin')
        }
        setEmail(localStorage.getItem('email'));
        setUrls(urls);
        setShortUrl(shortUrl);
        console.log("URLS: ", urls)
        console.log("SHORT URL: ", shortUrl)

        if (urls.length !== 0)
            setDisplay(true)
        // eslint-disable-next-line
    }, [urls, shortUrl, display]);


    function handleUrlChange(e) {
        setUrl(e.target.value)
    }
    async function submit() {
        if (url === '') {
            alert("Please enter the URL")
        }
        else {

            const baseURL = "https://realambuj.pythonanywhere.com/short_url/";
            await axios.post(baseURL, {
                email: email,
                url: url
            })
                .then(async (response) => {
                    setShortUrl(response.data.short_url)
                    setUrls(response.data.urls)

                })


        }

    }
    async function displayCutits() {
        const baseURL = "https://realambuj.pythonanywhere.com/short_url/";
        await axios.post(baseURL, {
            email: email,
            url: 'wwww.google.com'
        })
            .then(async (response) => {
                setShortUrl(response.data.short_url)
                setUrls(response.data.urls)

            })
    }

    return (
        <div className='py-4'>
            <div className="d-flex justify-content-around mx-5">

                <div className="input-group mb-1 mx-3">
                    <span className="input-group-text" id="basic-addon1">Enter URL</span>
                    <input type="text" className="form-control" onChange={handleUrlChange} placeholder="URL" aria-label="Username" aria-describedby="basic-addon1" required />
                </div>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-primary my-4" onClick={submit}>Cut.It</button>
                <button type="button" className="btn btn-success my-4 mx-2" onClick={displayCutits}>Get All Cut.Its</button>
            </div>

            <div className='align-item'>{display && <div className="alert alert-primary mx-5 col-md-3 " role="alert">
                {shortUrl}
            </div>}</div>
            <div className='align-item'>
                {display ? <table className="table text-center table-striped " style={{ width: "60%" }}>
                    <th>Short URL</th>
                    <th>Main URL</th>
                    <tbody>
                        {display && urls.map((item) =>
                            <tr>
                                <td>{item.short_url}</td>
                                <td>{item.url}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table> : <></>}

            </div>
        </div>
    )
}
