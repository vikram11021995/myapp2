import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 border p-4 bg-light">
                    <h3 className="text-center text-danger">Login</h3>
                    <hr className="bg-primary" />
                    <div className="mb-3 input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-envelope text-primary"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter e-Mail id" />
                    </div>

                    <div className="mb-3 input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-lock text-danger"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Password" />
                    </div>

                    <button className="btn btn-primary btn-block">Login</button>
                    <p className="text-center mt-3">
                        <Link to="/signup" className="text-primary">
                            <i className="fa fa-user-plus"></i> New User
						</Link>
                    </p>

                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    }
}
export default Login; 