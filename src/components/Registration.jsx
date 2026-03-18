import React, { useState } from 'react'

const Registration = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };


    const [userName, setUserName] = useState("");
    const [userErr, setUserErr] = useState("");
    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        if(userName === ""){
            setUserErr("User name is required!");
        }

        if(email === ""){
            setEmailErr("Email is required!");
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <h1 className='text-center'>Registration Form </h1>
                        <div className="card p-2">
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label class="form-label">Username</label>
                                    <input type="text" class="form-control" placeholder='Enter Your User Name' value={userName} onChange={handleUserName} />
                                    {
                                        userErr ? <span className='text-danger'>{userErr}</span> : null
                                    }
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder='Enter Your Email' value={email} onChange={handleEmail} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Contact</label>
                                    <input type="tel" class="form-control" placeholder='Enter Your Contact Number' />
                                </div>
                                <label class="form-label">Password</label>
                                <div className="input-group mb-3">
                                    <input type={show ? "text" : "password"} className="form-control" placeholder="Enter Your Password" />
                                    <span onClick={handleShow} className="input-group-text" id="basic-addon1">
                                        {
                                            show ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                                </svg>
                                        }
                                    </span>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration