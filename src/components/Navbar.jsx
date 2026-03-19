import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark sticky-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-3 text-white fw-bold fs-3" href="#">LIBRARY SYSTEM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto me-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className='me-3'>
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" height={50} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar