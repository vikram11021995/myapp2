import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to="/">Infocampus</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="home">
                            <i className="fa fa-home"></i> Dashboard
                </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="viewprofile">
                            <i className="fa fa-eye"></i> View Profile
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="editprofile">
                            <i className="fa fa-edit"></i> Edit Profile
                </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link">
                            Welcome - Ramesh <i className="fa fa-power-off text-danger"></i> Logout
                </Link>
                    </li>


                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );

}

export default Header;