import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">AWW <strong>YEAH!</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/Home">Home</Link>
                    <Link className="nav-link" to="/Signup">Sign Up</Link>
                    <Link className="nav-link" to="/Login">Log In</Link>
                    <Link className="nav-link" to="/Logout">Log Out</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}